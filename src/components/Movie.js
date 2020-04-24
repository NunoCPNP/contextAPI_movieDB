import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

//* Components
import Button from './Button'
import Votes from './Votes'

const Movie = ({ id, title, poster, vaverage }) => {
  const w185 = `https://image.tmdb.org/t/p/w185/${poster}`
  const w342 = `https://image.tmdb.org/t/p/w342/${poster}`

  return (
    <Container>
      <Link to={`/movie/${id}`}>
        <img src={w342} srcSet={`${w185} 185w, ${w342} 342w`} alt={title} />
        <Votes vaverage={vaverage} />
      </Link>
      <Button id={id} />
    </Container>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  vaverage: PropTypes.number.isRequired,
}

export default Movie

const Container = styled('div')`
  position: relative;
  display: grid;
  grid-template-rows: auto 2.6rem;
  grid-gap: 1.4rem;

  img {
    cursor: pointer;
    width: 100%;
    border-radius: 0.4rem;
  }
`
