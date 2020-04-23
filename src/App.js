import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Loader from './components/Loader'
import Menu from './components/Menu'

import { StateProvider } from './store/store'

import Global from './styles/Global'

const NowPlaying = lazy(() => import('./sections/NowPlaying'))
const TopRated = lazy(() => import('./sections/TopRated'))
const UpComing = lazy(() => import('./sections/UpComing'))

function App() {
  return (
    <>
      <StateProvider>
        <NavBar />
        <Menu />
        <Suspense fallback={<Loader />}>
          <main>
            <Switch>
              <Route exact path="/" component={NowPlaying} />
              <Route exact path="/toprated" component={TopRated} />
              <Route exact path="/upcoming" component={UpComing} />
            </Switch>
          </main>
        </Suspense>
        <Global />
      </StateProvider>
    </>
  )
}

export default App
