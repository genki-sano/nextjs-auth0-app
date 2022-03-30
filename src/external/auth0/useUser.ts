import { useAuth0, User as AuthUser } from '@auth0/auth0-react'
import { UserContextInterface } from './contexts/UserProvidor'

export interface User extends AuthUser {}

export const useUser = <T extends User = User>(): UserContextInterface<T> => {
  return useAuth0()
}
