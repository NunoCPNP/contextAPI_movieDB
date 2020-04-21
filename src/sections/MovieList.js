import React, { useEffect, useContext } from "react"
import styled from "@emotion/styled"
import axios from "axios"

import { store } from "../store/store"

import Movie from "../components/Movie"

const MovieList = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  useEffect(() => {
    (async function getMovies() {
      const response = await axios.get(`${process.env.REACT_APP_APIURL}/3/movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`)
      const data = response.data.results
      dispatch({ type: 'GET_MOVIES', payload: data })
    })()
    // eslint-disable-next-line
  }, [])
  
  return (
    <GridContainer>
      {state.movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} poster={movie.poster_path} />
      ))}
    </GridContainer>
  )
}

export default MovieList

const GridContainer = styled('div')`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  max-width: 120rem;
  grid-gap: 2rem;
`