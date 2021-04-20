import { API, Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { onCreateMessageByConversationId } from '../graphql/subscriptions'
import {
  listUsers,
  getUser,
  listMessages,
  listConversations
} from '../graphql/queries'
import '../aws-config'
import { FcPlus } from 'react-icons/fc'
import {
  createConversation,
  createUserConversation,
  createMessage
} from '../graphql/mutations'
import MessageDisplayBox from '../components/messagesDisplayBox'
import InputBox from '../components/InputBox'

export default function Users() {
  // states
  const [isHidden, setIsHidden] = useState(true)
  const [users, setUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState()
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [conversationId, setConversationId] = useState('')

  // get LoggedIn user
  const getLoggedInUser = () => {
    Auth.currentAuthenticatedUser()
      .then(user => setLoggedInUser(user))
      .catch(e =>
        console.log('getLoggedInUser error is', e.message)
      )
  }
  useEffect(getLoggedInUser, [])

  // get all the users
  const getUsers = () => {
    API.graphql({
      query: listUsers,
      variables: {
        filter: {
          username: { ne: loggedInUser?.username }
        }
      }
    })
      .then(users => setUsers(users.data.listUsers.items))
      .catch(e =>
        console.log('getUsers error is', e.message)
      )
  }
  useEffect(getUsers, [loggedInUser])

  // click user to start a conversation
  const startConversation = async id => {
    try {
      setIsHidden(false)
      const clickedUser = await API.graphql({
        query: getUser,
        variables: {
          id
        }
      })
      const checkIfAlreadyInConversation = await API.graphql(
        {
          query: listConversations,
          variables: {
            filter: {
              members: {
                contains: clickedUser.data.getUser.username
              }
            }
          }
        }
      )
      if (
        checkIfAlreadyInConversation.data.listConversations
          .items.length !== 0
      ) {
        const messagesFromExistingConversation = await API.graphql(
          {
            query: listMessages,
            variables: {
              filter: {
                conversationId: {
                  eq:
                    checkIfAlreadyInConversation.data
                      .listConversations.items[0].id
                }
              }
            }
          }
        )
        setMessages(
          messagesFromExistingConversation.data.listMessages
            .items
        )
        setConversationId(
          checkIfAlreadyInConversation.data
            .listConversations.items[0].id
        )
        // Subscription
        API.graphql({
          query: onCreateMessageByConversationId,
          variables: {
            conversationId:
              checkIfAlreadyInConversation.data
                .listConversations.items[0].id
          }
        }).subscribe({
          next: messageData => {
            setMessages(prev => [
              ...prev,
              {
                content:
                  messageData.value.data
                    .onCreateMessageByConversationId
                    .content,
                id:
                  messageData.value.data
                    .onCreateMessageByConversationId.id
              }
            ])
          }
        })
      } else {
        const newConversation = await API.graphql({
          query: createConversation,
          variables: {
            input: {
              members: [
                loggedInUser.username,
                clickedUser.data.getUser.username
              ]
            }
          }
        })

        setConversationId(
          newConversation.data.createConversation.id
        )
        await API.graphql({
          query: createUserConversation,
          variables: {
            input: {
              conversationId:
                newConversation.data.createConversation.id,
              userId: loggedInUser.attributes.sub
            }
          }
        })

        await API.graphql({
          query: createUserConversation,
          variables: {
            input: {
              conversationId:
                newConversation.data.createConversation.id,
              userId: id
            }
          }
        })

        API.graphql({
          query: onCreateMessageByConversationId,
          variables: {
            conversationId:
              newConversation.data.createConversation.id
          }
        }).subscribe({
          next: messageData => {
            setMessages(prev => [
              ...prev,
              {
                content:
                  messageData.value.data
                    .onCreateMessageByConversationId
                    .content,
                id:
                  messageData.value.data
                    .onCreateMessageByConversationId.id
              }
            ])
          }
        })
      }
    } catch (e) {
      console.error('startConversation error is', e)
    }
  }
  // input box value binding to message
  const handleChange = e => {
    e.preventDefault()
    setMessage(e.target.value)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  // handle message submittion
  const handleClick = async () => {
    try {
      await API.graphql({
        query: createMessage,
        variables: {
          input: {
            content: message,
            userId: loggedInUser.attributes.sub,
            conversationId
          }
        }
      })
      setMessage('')
    } catch (e) {
      console.error('click error is', e.message)
    }
  }

  return (
    <>
      <ul className='w-1/3 mx-auto mt-8 text-2xl text-pink-500 border'>
        {users.map(_ => (
          <li
            className='flex-row items-center border'
            key={_.id}
          >
            <span>{_.username}</span>
            <FcPlus
              onClick={() => startConversation(_.id)}
            />
          </li>
        ))}
      </ul>
      <MessageDisplayBox
        isHidden={isHidden}
        messages={messages}
      />
      <InputBox
        value={message}
        onChange={handleChange}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      />
    </>
  )
}
