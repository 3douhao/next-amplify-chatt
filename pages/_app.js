import 'tailwindcss/tailwind.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className='mt-12'>
      <ul className='flex-row justify-between w-3/4 mx-auto text-2xl text-blue-500'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/users'>
            <a>Users</a>
          </Link>
        </li>
        <li>
          <Link href='/conversations'>
            <a>Conversations</a>
          </Link>
        </li>
        <li>
          <Link href='/profile'>
            <a>Profile</a>
          </Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
