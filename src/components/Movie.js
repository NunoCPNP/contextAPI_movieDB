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

  const list = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <Container variants={list} initial="hidden" animate="visible">
      <motion.div variants={item}>
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

const Container = styled(motion.div)`
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
