import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/contexts'

export const PrivateRoute = () => {
  const { isUserLoggedIn } = useAuth()
  return isUserLoggedIn ? <Outlet /> : <Navigate to='/login' />
}
