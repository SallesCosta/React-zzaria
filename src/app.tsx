import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Progress } from '@chakra-ui/react'

import {
  PrivateRoute,
  CHOOSE_PIZZA_FLAVOURS,
  HOME,
  LOGIN,
  CHOOSE_PIZZA_QUANTITY,
} from '@/helpers'

const MainPage = lazy(() => import('@/pages/mainPage'))
const LoginPage = lazy(() => import('@/pages/loginPage'))
const ChoosePizzaSize = lazy(() => import('@/pages/choosePizzaSize'))
const ChoosePizzaFlavours = lazy(() => import('@/pages/choosePizzaFlavours'))
const ChoosePizzaQuantity = lazy(() => import('@/pages/choosePizzaQuantity'))

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
              <Route
                element={<ChoosePizzaQuantity />}
                path={CHOOSE_PIZZA_QUANTITY}
              />
            </Route>
          </Route>
          <Route element={<LoginPage />} path={LOGIN} />
        </Routes>
      </Suspense>
    </>
  )
}
