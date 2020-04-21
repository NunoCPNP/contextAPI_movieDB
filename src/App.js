import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Loader from './components/Loader'

import { StateProvider } from './store/store'
import Global from './styles/Global'

const NowPlaying = lazy(() => import('./sections/NowPlaying'))

function App() {
  return (
    <>
      <StateProvider>
        <NavBar />
        <Suspense fallback={<Loader />}>
          <main>
            <Switch>
              <Route exact path="/" component={NowPlaying} />
            </Switch>
          </main>
        </Suspense>
        <Global />
      </StateProvider>
    </>
  )
}

export default App
