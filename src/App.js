import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Loader from './components/Loader'
import Menu from './components/Menu'

import Global from './styles/Global'

const Home = lazy(() => import('./sections/Home'))
const MovieDetails = lazy(() => import('./sections/MovieDetails'))

const App = () => (
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

export default App
