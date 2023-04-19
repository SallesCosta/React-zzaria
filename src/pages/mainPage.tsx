import { lazy, Suspense } from 'react'
import { VStack, Progress } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import { Header } from './components/'

const ChoosePizza = lazy(() => import('@/pages/choosePizza'))
const PrivatePage = lazy(() => import('@/pages/privatePage'))

const MainPage = () => {
  return (
    <VStack>
      <Header />
      <Suspense fallback={<Progress size='xs' isIndeterminate />}>
        <Routes>
          <Route element={<ChoosePizza />} path='/' />
          <Route element={<PrivatePage />} path='/main/private' />
        </Routes>
      </Suspense>

      <Header />
    </VStack>
  )
}

export default MainPage
