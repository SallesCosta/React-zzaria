import { lazy, Suspense } from 'react'
import { VStack, Progress } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const Header = lazy(() => import('@/pages/components/Header'))

const MainPage = () => {
  return (
    <VStack h='100vh'>
      <Header />
      <Suspense fallback={<Progress size='xs' isIndeterminate />}>
        <Outlet />
      </Suspense>
    </VStack>
  )
}

export default MainPage
