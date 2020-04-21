import React from 'react';
import styled from "@emotion/styled"

import NavBar from "./sections/NavBar"
import MovieList from "./sections/MovieList"

import Global from "./styles/Global"

function App() {
  return (
    <>
      <NavBar />
      <Main>
        <MovieList />
      </Main>
      <Global />
    </>
  );
}

export default App;

const Main = styled('main')`
  display: flex;
  justify-content: center;
`