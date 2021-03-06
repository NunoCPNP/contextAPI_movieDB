import React, { useEffect, useState, useContext } from 'react'
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

//* Global State
import { store } from '../store/store'

//* Styles
import { secondaryB } from '../styles/variables'

const Button = ({ id }) => {
  const globalState = useContext(store)
  const { dispatch, state } = globalState

  const [icon, setIcon] = useState(false)

  const isOnWishlist = state.wishlist.filter((movie) => movie.id === id)

  useEffect(() => {
    if (isOnWishlist.length > 0) {
      setIcon(true)
    } else {
      setIcon(false)
    }
  }, [id, isOnWishlist])

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ y: -2 }}
      whileTap={{ y: 2 }}
      onClick={() => {
        if (isOnWishlist.length === 0) {
          dispatch({ type: 'ADD_TO_WISHLIST', payload: id })
        }
      }}
    >
      <span>Add to Wishlist</span>
      {icon ? <IoIosHeart key={id} color="red" /> : <IoIosHeartEmpty key={id} />}
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
