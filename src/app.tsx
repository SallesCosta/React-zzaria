import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Progress } from '@chakra-ui/react'
import { PrivateRoute } from './helpers/protectedRoute'

import { CHOOSE_PIZZA_FLAVOURS, HOME, LOGIN } from '@/helpers/routes'

const MainPage = lazy(() => import('@/pages/mainPage'))
const LoginPage = lazy(() => import('@/pages/loginPage'))
const ChoosePizzaSize = lazy(() => import('@/pages/choosePizzaSize'))
const ChoosePizzaFlavours = lazy(() => import('@/pages/choosePizzaFlavours'))

export function App () {
  return (
    <>
      <Suspense fallback={<Progress size='xs' isIndeterminate />}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<MainPage />} path={HOME}>
              <Route element={<ChoosePizzaSize />} path={HOME} />
              <Route
                element={<ChoosePizzaFlavours />}
                path={CHOOSE_PIZZA_FLAVOURS}
              />
            </Route>
          </Route>
          <Route element={<LoginPage />} path={LOGIN} />
        </Routes>
      </Suspense>
    </>
  )
}
