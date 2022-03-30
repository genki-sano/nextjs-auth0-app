import '../styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react'
import type { AppProps } from 'next/app'

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI as string}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default MyApp
