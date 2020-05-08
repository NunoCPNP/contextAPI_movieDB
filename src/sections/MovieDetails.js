import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//* Components
import Loader from '../components/Loader'

//* API
import { getMovie, getCredits, getSimilar } from '../api/getData'

//* Styles
import { Cast, Cover, MobileCover, MovieContainer, Details, Header, MobileHeader } from './MovieDetails.styles'

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
          <MovieContainer>
            <Cover>
              <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
            </Cover>
            <MobileCover>
              <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} />
              <MobileHeader>
                <h2>{movie.title}</h2>
              </MobileHeader>
            </MobileCover>
            <Details>
              <Header>
                <h2>{movie.title}</h2>
                <div className="info">
                  {movie.spoken_languages[0].name} / {movie.runtime} min / {movie.release_date.slice(0, 4)}
                </div>
                <div className="genre">
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
              <h3>Main Cast</h3>
              <Cast>
                {credits !== undefined &&
                  credits.cast.map((cast, index) => {
                    if (index < 6) {
                      return (
                        <div key={cast.cast_id}>
                          <img src={`http://image.tmdb.org/t/p/w185/${cast.profile_path}`} alt={cast.name} />
                          <span>{cast.name}</span>
                        </div>
                      )
                    }
                  })}
              </Cast>
            </Details>
          </MovieContainer>
        </>
      )}
    </>
  )
}

export default MovieDetails
