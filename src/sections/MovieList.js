import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import axios from "axios"

import Movie from "../components/Movie"

const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    (async function getMovies() {
      const response = await axios.get(`${process.env.REACT_APP_APIURL}/3/movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`)
      const data = response.data.results
      setMovies(data)
    })()
  }, [])

  console.log("Movies: ", movies)
  return (
    <GridContainer>
      {movies.map((movie) => (
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
  grid-gap: 2rem;
`