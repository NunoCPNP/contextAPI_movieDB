import React from "react"
import styled from "@emotion/styled"

import { FaHeart } from 'react-icons/fa';

const NavBar = () => {
  return (
    <Container>
      <div>
        <span>The Movie DB</span>
      </div>
      <Wishlist>
        <span>Wishlist</span>
        <FaHeart color="white" />
      </Wishlist>
    </Container>
  )
}

export default NavBar

const Container = styled('nav')`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  background-color: black;
  color: white;

  span {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`

const Wishlist = styled('div')`
  display: flex;
  align-items: center;

  span {
    padding-right: 1rem;
  }
`