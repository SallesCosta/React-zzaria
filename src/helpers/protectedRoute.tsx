import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from './authContext'

export const PrivateRoute = () => {
  const { isUserLoggedIn } = useAuthContext()
  return isUserLoggedIn ? <Outlet /> : <Navigate to='/login' />
}
