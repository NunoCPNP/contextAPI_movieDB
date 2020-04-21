import React, { Suspense, lazy } from 'react'
import styled from '@emotion/styled'

import NavBar from './sections/NavBar'
import Loader from './components/Loader'

import { StateProvider } from './store/store.js'

import Global from './styles/Global'

const MovieList = lazy(() => import('./sections/MovieList'))

function App() {
  return (
    <>
      <StateProvider>
        <Suspense fallback={<Loader />}>
          <NavBar />
          <main>
            <MovieList />
          </main>
          <Global />
        </Suspense>
      </StateProvider>
    </>
  )
}

export default App