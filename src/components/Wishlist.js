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
      <Container onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}>
        <span>Wishlist</span>
        {state.wishlist.length > 0 ? (
          <FaHeart color="red" className="icon" />
        ) : (
          <FaHeart color="white" className="icon" />
        )}
        <span>{`( ${state.wishlist.length} )`}</span>
      </Container>
    </>
  )
}

export default Wishlist

const Container = styled('div')`
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;

  span {
    padding: 0 1rem 0 1rem;
  }

  .icon {
    font-size: 1.8rem;
  }
`
