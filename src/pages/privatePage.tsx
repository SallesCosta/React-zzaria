import { Button } from '@chakra-ui/react'
import { useAuthContext } from '@/helpers/authContext'

const PrivatePage = () => {
  const { logout } = useAuthContext()

  const handleLogout = () => logout()

  return (
    <>
      privatePage
      <Button onClick={handleLogout}>LogOut</Button>
    </>
  )
}

export default PrivatePage
