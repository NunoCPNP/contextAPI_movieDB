import React, { useContext, useEffect, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

//* Components
import NavBar from './components/NavBar'
import Loader from './components/Loader'
import Menu from './components/Menu'

//* Global State
import { store } from './store/store'

//* Styles
import Global from './styles/Global'

const Home = lazy(() => import('./sections/Home'))
const MovieDetails = lazy(() => import('./sections/MovieDetails'))

const App = () => {
  const globalState = useContext(store)
  const { dispatch } = globalState

  useEffect(() => {
    dispatch({ type: 'GET_WISHLIST_FROM_STORAGE' })
  }, [])

  return (
    <>
      <NavBar />
      <Menu />
      <Suspense fallback={<Loader />}>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={MovieDetails} />
          </Switch>
        </main>
      </Suspense>
      <Global />
    </>
  )
}

export default App
