import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Progress } from '@chakra-ui/react'
import { PrivateRoute } from './helpers/protectedRoute'

const MainPage = lazy(() => import('@/pages/mainPage'))
const LoginPage = lazy(() => import('@/pages/loginPage'))
const PrivatePage = lazy(() => import('@/pages/privatePage'))

export function App () {
  return (
    <>
      <Suspense fallback={<Progress size='xs' isIndeterminate />}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<MainPage />} path='/' />
          </Route>
          <Route element={<LoginPage />} path='/login' />
        </Routes>
      </Suspense>
    </>
  )
}
