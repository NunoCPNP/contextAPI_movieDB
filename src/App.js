import React from 'react';

import NavBar from "./sections/NavBar"
import MovieList from "./sections/MovieList"

import Global from "./styles/Global"

function App() {
  return (
    <>
      <NavBar />
      <main>
        <MovieList />
      </main>
      <Global />
    </>
  );
}

export default App;
