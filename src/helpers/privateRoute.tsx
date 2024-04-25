import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/contexts'
import { LOGIN } from '@/helpers/routes'

export const PrivateRoute = () => {
  const { isUserLoggedIn } = useAuth()
  return isUserLoggedIn ? <Outlet /> : <Navigate to={LOGIN} />
}
