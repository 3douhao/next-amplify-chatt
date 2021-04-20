import {
  listConversations,
  listUsers
} from '../graphql/queries'
import { API } from 'aws-amplify'
import { useEffect, useState } from 'react'
import '../aws-config'
import InputBox from '../components/InputBox'

export default function Conversations() {
  const [conversations, setConversations] = useState(null)
  const getAllConversations = async () => {
    try {
      const allConversations = await API.graphql({
        query: listConversations
      })
      setConversations(
        allConversations.data.listConversations.items
      )
    } catch (e) {
      console.error(e.message)
    }
  }
  useEffect(() => {
    getAllConversations()
  }, [])

  return (
    <div className='h-screen bg-green-500'>
      {!conversations ? (
        <h1 className='text-3xl py-10'>Loading...</h1>
      ) : (
        <ul className='w-24 mt-8 ml-16 text-purple-700'>
          {conversations.map(_ => (
            <li
              className='flex-row justify-around border border-gray-500'
              key={_.id}
            >
              <span>{_.members[1]}</span>
            </li>
          ))}
        </ul>
      )}
      <InputBox />
    </div>
  )
}
