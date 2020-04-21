import React, { useContext } from "react"
import styled from "@emotion/styled"

import { FaHeart } from 'react-icons/fa';

import { store } from "../store/store"

const Wishlist = () => {
  const globalState = useContext(store);
  const { state } = globalState;

  return (
    <Container>
        <span>Wishlist</span>
        {state.wishlist.length > 0 ? <FaHeart color="red" /> : <FaHeart color="white" />}
        <span>{`(${state.wishlist.length})`}</span>
      </Container>
  )
}

export default Wishlist

const Container = styled('div')`
  display: flex;
  align-items: center;

  span {
    padding: 0 1rem;
  }
`