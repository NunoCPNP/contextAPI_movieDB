import React, { useContext } from 'react'
import { FaHeart } from 'react-icons/fa'
import styled from '@emotion/styled'

//* Global State
import { store } from '../store/store'

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
