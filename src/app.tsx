import { Route, Routes } from 'react-router-dom'
import { LoginPage, MainPage } from '@/pages'

export function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </>
  )
}
