import React, { useContext } from 'react'
import styled from '@emotion/styled'

import { FaHeart } from 'react-icons/fa'

import { store } from '../store/store'

import { white } from '../styles/variables'

const Wishlist = () => {
  const globalState = useContext(store)
  const { state, dispatch } = globalState

  return (
    <>
      <Container>
        <button onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}>Wishlist</button>
        {state.wishlist.length > 0 ? <FaHeart color="red" /> : <FaHeart color="white" />}
        <span>{`( ${state.wishlist.length} )`}</span>
      </Container>
    </>
  )
}

export default Wishlist

const Container = styled('div')`
  font-size: 1.1rem;
  display: flex;
  align-items: center;

  button {
    cursor: pointer;
    font-size: 1.1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    color: ${white};
    border: none;
    background-color: transparent;
    padding: 0 1rem;
  }

  span {
    padding-left: 1rem;
  }
`
