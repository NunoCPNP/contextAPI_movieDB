import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { IoIosHeartEmpty } from 'react-icons/io'

import { store } from '../store/store'

import { black, secondaryB } from '../styles/variables'

const Button = ({ id }) => {
  const globalState = useContext(store)
  const { dispatch } = globalState

  return (
    <Container
      whileHover={{ y: -2 }}
      whileTap={{ y: 2 }}
      onClick={() => dispatch({ type: 'ADD_TO_WISHLIST', payload: id })}
    >
      <span>Add to Wishlist</span>
      <IoIosHeartEmpty />
    </Container>
  )
}

Button.propTypes = {
  id: PropTypes.number.isRequired,
}

export default Button

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${secondaryB};
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;

  span {
    font-size: 1.1rem;
    padding-right: 0.5rem;
  }
`
