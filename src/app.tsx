import { lazy, Suspense, ComponentType } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Progress } from '@chakra-ui/react'

import {
  PrivateRoute,
  CHECKOUT,
  CHOOSE_PIZZA_FLAVOURS,
  HOME,
  LOGIN,
  CHOOSE_PIZZA_QUANTITY,
  CONFIRMATION,
  SUCCESS,
} from '@/helpers'

const MainPage = lazy(() => import('@/pages/mainPage'))
const LoginPage = lazy(() => import('@/pages/loginPage'))
const ChoosePizzaQuantity = lazy(() => import('@/pages/choosePizzaQuantity') as Promise<{ default: ComponentType<{}> }>)
const ChoosePizzaFlavours = lazy(() => import('@/pages/choosePizzaFlavours'))
const ConfirmationPage = lazy(() => import('@/pages/confirmationPage'))
const SuccessPage = lazy(() => import('@/pages/successPage'))
const CheckoutPage = lazy(() => import('@/pages/checkoutPage') as Promise<{ default: ComponentType<{}> }>)
const ChoosePizzaSize = lazy(() => import('@/pages/choosePizzaSize') as Promise<{ default: ComponentType<{}> }>)

export function App () {
  return (
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
            <Route element={<CheckoutPage />} path={CHECKOUT} />
            <Route element={<ConfirmationPage />} path={CONFIRMATION} />
            <Route element={<SuccessPage />} path={SUCCESS} />
          </Route>
        </Route>
        <Route element={<LoginPage />} path={LOGIN} />
      </Routes>
    </Suspense>
  )
}
