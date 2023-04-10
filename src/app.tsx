import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Progress } from '@chakra-ui/react'

const MainPage = lazy(() => import('@/pages/mainPage'))
const LoginPage = lazy(() => import('@/pages/loginPage'))

export function App () {
  return (
    <>
      <Suspense fallback={<Progress size='xs' isIndeterminate />}>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/main' element={<MainPage />} />
        </Routes>
      </Suspense>
    </>
  )
}
