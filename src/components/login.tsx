import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  return isAuthenticated ? null : (
    <button onClick={() => loginWithRedirect()}>Log In</button>
  )
}
