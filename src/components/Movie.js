import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Button from './Button'

const Movie = ({ id, title, poster }) => {
  return (
    <Container>
      <motion.img
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt={title}
      />
      <Button id={id} />
    </Container>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

export default Movie

const Container = styled('div')`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 1.4rem;

  img {
    width: 100%;
    border-radius: 0.4rem;
  }
`
