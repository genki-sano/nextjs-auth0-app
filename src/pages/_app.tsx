import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@/external/auth0/contexts/UserProvidor'

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
