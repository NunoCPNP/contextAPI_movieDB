import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Loader from './components/Loader'
import Menu from './components/Menu'

import { StateProvider } from './store/store'

import Global from './styles/Global'

const Home = lazy(() => import('./sections/Home'))

function App() {
  return (
    <>
      <StateProvider>
        <NavBar />
        <Menu />
        <Suspense fallback={<Loader />}>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </main>
        </Suspense>
        <Global />
      </StateProvider>
    </>
  )
}

export default App
