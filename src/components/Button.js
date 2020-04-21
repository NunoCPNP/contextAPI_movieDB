import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { store } from '../store/store'

import { black, secondaryB } from '../styles/variables'

const Button = ({ id }) => {
  const globalState = useContext(store)
  const { dispatch } = globalState

  return (
    <StyledButton
      whileHover={{ y: -2 }}
      whileTap={{ y: 2 }}
      onClick={() => dispatch({ type: 'ADD_TO_WISHLIST', payload: id })}
    >
      Add to Wishlist
    </StyledButton>
  )
}

Button.propTypes = {
  id: PropTypes.number.isRequired,
}

export default Button

const StyledButton = styled(motion.button)`
  font-family: 'Cairo', sans-serif;
  color: ${black};
  background: ${secondaryB};
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  width: 100%;
  transition: all 300ms linear 0s;
  padding: 0.2rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
`
