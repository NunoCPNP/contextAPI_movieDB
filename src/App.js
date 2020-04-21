import React from 'react';
import styled from "@emotion/styled"

import NavBar from "./sections/NavBar"
import MovieList from "./sections/MovieList"

import { StateProvider } from './store/store.js';

import Global from "./styles/Global"

function App() {
  return (
    <> 
      <StateProvider>
        <>
          <NavBar />
          <Main>
            <MovieList />
          </Main>
          <Global />
        </>
      </StateProvider>
    </>
  );
}

export default App;

const Main = styled('main')`
  display: flex;
  justify-content: center;
`