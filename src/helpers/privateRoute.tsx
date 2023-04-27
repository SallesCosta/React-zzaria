import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './authContext'

export const PrivateRoute = () => {
  const { isUserLoggedIn } = useAuth()
  return isUserLoggedIn ? <Outlet /> : <Navigate to='/login' />
}
