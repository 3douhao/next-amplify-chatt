import Head from 'next/head'
import {
  withAuthenticator,
  AmplifySignOut
} from '@aws-amplify/ui-react'
import '../aws-config'
import { API, Auth } from 'aws-amplify'
import { useEffect } from 'react'
import { getUser } from '../graphql/queries'
import { createUser } from '../graphql/mutations'

function Home() {
  const getLoggedInUser = async () => {
    const user = await Auth.currentAuthenticatedUser()
    if (user) {
      const userInDB = await API.graphql({
        query: getUser,
        variables: {
          id: user.attributes.sub
        }
      })
      if (!userInDB.data.getUser) {
        const newUser = await API.graphql({
          query: createUser,
          variables: {
            input: {
              username: user.username,
              id: user.attributes.sub
            }
          }
        })
        console.log('add user to db', newUser)
      }
      return
    }
  }
  useEffect(getLoggedInUser, [])
  return (
    <div className='w-2/3 mx-auto mt-4'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Home page</h1>
      <AmplifySignOut />
    </div>
  )
}

export default withAuthenticator(Home)
