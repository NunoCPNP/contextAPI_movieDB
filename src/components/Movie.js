import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Button from './Button'
import Votes from './Votes'

const Movie = ({ id, title, poster, vaverage }) => {
  const w185 = `https://image.tmdb.org/t/p/w185/${poster}`
  const w342 = `https://image.tmdb.org/t/p/w342/${poster}`
  const w500 = `https://image.tmdb.org/t/p/w500/${poster}`

  return (
    <Container>
      <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
        <img src={w342} srcSet={`${w185} 185w, ${w342} 342w, ${w500} 500w`} alt={title} />
        <Votes vaverage={vaverage} />
      </motion.div>
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
    width: 100%;
    border-radius: 0.4rem;
  }
`
