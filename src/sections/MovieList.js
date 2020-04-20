import React, { useEffect, useState } from "react"
import axios from "axios"

const MovieList = () => {
  const [movies, setMovies] = useState()

  useEffect(() => {
    (async function getMovies() {
      const response = await axios.get(`${process.env.REACT_APP_APIURL}/3/movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`)
      const data = response.data.results
      setMovies(data)
    })()
  }, [])

  console.log(movies)
  return <></>
}

export default MovieList