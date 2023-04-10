import { Route, Routes } from 'react-router-dom'

const MainPage = () => {
  const routes = [
    { path: '/rota1', element: 'Rota 1' },
    { path: '/rota2', element: 'Rota 2' },
  ]
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} />
        ))}
      </Routes>
      <div>mainPage</div>
    </>
  )
}

export default MainPage
