import { useUser } from '@/external/auth0/contexts/UserProvidor'

export const UserArea = () => {
  const { error, isLoading, isAuthenticated, user, loginWithRedirect, logout } =
    useUser()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return isAuthenticated ? (
    <div>
      <p>ログイン完了</p>
      <p>{user?.email}</p>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        LOGOUT
      </button>
    </div>
  ) : (
    <div>
      <button onClick={() => loginWithRedirect()}>LOGIN</button>
    </div>
  )
}
