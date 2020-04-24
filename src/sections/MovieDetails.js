import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'

//* Components
import Loader from '../components/Loader'

//* API
import { getMovie } from '../api/getMovies'

//* Styles
import { primaryA, white } from '../styles/variables'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState()

  useEffect(() => {
    getMovie(id, setMovie)
  }, [id])

  console.log('MOVIE: ', movie)

  return (
    <>
      {movie === undefined ? (
        <Loader />
      ) : (
        <Background>
          <Container>
            <div>
              <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
            </div>
            <div>
              <div>{movie.title}</div>
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
              <div>{movie.overview}</div>
            </div>
          </Container>
        </Background>
      )}
    </>
  )
}

export default MovieDetails

const Background = styled('div')``

const Container = styled('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 3rem;
  color: ${white};
`
