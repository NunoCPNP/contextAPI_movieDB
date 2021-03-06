import React from 'react'
import styled from '@emotion/styled'

//* Components
import Wishlist from './Wishlist'

//* Styles
import { primaryA, white } from '../styles/variables'

const NavBar = () => {
  return (
    <Container>
      <div>
        <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>ContextAPI Demo</span>
      </div>
      <Wishlist />
    </Container>
  )
}

export default NavBar

const Container = styled('nav')`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  background-color: ${primaryA};
  color: ${white};
  z-index: 10;

  span {
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`
