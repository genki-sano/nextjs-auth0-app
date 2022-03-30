import { Auth0ContextInterface, Auth0Provider } from '@auth0/auth0-react'
import { auth0Config } from '../config'

export interface UserContextInterface<T> extends Auth0ContextInterface<T> {}

export const UserProvider: React.FC = ({ children }) => {
  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      redirectUri={auth0Config.redirectUri}
    >
      {children}
    </Auth0Provider>
  )
}
