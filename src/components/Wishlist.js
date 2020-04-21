import React, { useContext } from 'react'
import styled from '@emotion/styled'

import { FaHeart } from 'react-icons/fa'

import { store } from '../store/store'

const Wishlist = () => {
  const globalState = useContext(store)
  const { state, dispatch } = globalState

  return (
    <Container>
      <button onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}>Wishlist</button>
      {state.wishlist.length > 0 ? <FaHeart color="red" /> : <FaHeart color="white" />}
      <span>{`(${state.wishlist.length})`}</span>
    </Container>
  )
}

export default Wishlist

const Container = styled('div')`
  display: flex;
  align-items: center;

  button {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    border: none;
    background-color: transparent;
    padding: 0 1rem;
  }

  span {
    padding-left: 1rem;
  }
`
