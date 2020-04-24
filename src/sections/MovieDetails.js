import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'

//* Components
import Loader from '../components/Loader'

//* API
import { getMovie, getCredits, getSimilar } from '../api/getData'

//* Styles
import { secondaryB, white } from '../styles/variables'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [credits, setCredits] = useState()
  const [similar, setSimilar] = useState()

  useEffect(() => {
    getMovie(id, setMovie)
    getCredits(id, setCredits)
    getSimilar(id, setSimilar)
  }, [id])

  console.log('MOVIE: ', movie)
  console.log('CREDITS: ', credits)
  console.log('SIMILAR: ', similar)

  return (
    <>
      {movie === undefined ? (
        <Loader />
      ) : (
        <>
          <Container>
            <Cover>
              <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
            </Cover>
            <Details>
              <Header>
                <h2>{movie.title}</h2>
                <div className="info">
                  {movie.spoken_languages[0].name} / {movie.runtime} min / {movie.release_date.slice(0, 4)}
                </div>
                <div>
                  <ul>
                    {movie.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="info">
                  Rating: <span>{movie.vote_average}</span>
                </div>
              </Header>
              <div className="overview">{movie.overview}</div>
            </Details>
          </Container>
          <Cast>
            {credits !== undefined &&
              credits.cast.map((cast) => {
                return (
                  <div key={cast.cast_id}>
                    <img src={`http://image.tmdb.org/t/p/w185/${cast.profile_path}`} alt={cast.name} />
                    <span>{cast.name}</span>
                  </div>
                )
              })}
          </Cast>
        </>
      )}
    </>
  )
}

export default MovieDetails

const Container = styled('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 3rem;
`
const Cover = styled('div')`
  img {
    border-radius: 0.5rem;
  }
`

const Details = styled('div')`
  color: ${white};
  padding: 2rem;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    text-shadow: rgb(38, 37, 51) 0px 2px 2px;
    letter-spacing: 0.1rem;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      font-size: 1.5rem;
      padding: 0 0.3rem;
      font-weight: 600;
      text-shadow: rgb(38, 37, 51) 0px 2px 2px;
      margin-right: 1rem;
      background-size: 100% 200%;
      background-image: linear-gradient(
        transparent 0%,
        transparent calc(50% - 0.5rem),
        ${secondaryB} calc(50% - 0.5rem),
        ${secondaryB} 100%
      );
    }
  }

  .overview {
    padding-top: 4rem;
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`

const Header = styled('div')`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-row-gap: 1rem;

  .info {
    margin-top: auto;
    margin-bottom: auto;
    text-align: right;
    font-size: 1.5rem;
    padding: 0 0.3rem;
    font-weight: 600;
    text-shadow: rgb(38, 37, 51) 0px 2px 2px;

    span {
      color: ${secondaryB};
    }
  }
`

const Cast = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));

  img {
    width: auto;
    height: auto;
  }
`
