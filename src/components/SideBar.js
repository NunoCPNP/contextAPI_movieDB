import React, { useContext } from 'react'
import styled from '@emotion/styled'

import { store } from '../store/store'

const SideBar = () => {
  const globalState = useContext(store)
  const { state } = globalState

  return (
    <Container>
      {state.wishlist.map((movie) => (
          <Item key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div>
              <p>{movie.title}</p>
              <span>{movie.release_date}</span>
            </div>
          </Item>
        )
      )}
    </Container>
  )
}

export default SideBar

const Container = styled('div')`
  background-color: black;
  color: white;
  position: fixed;
  top: 4rem;
  right: 0;
  bottom: 0;
  padding: 1rem;
`
const Item = styled('div')`
  display: flex;
  margin: 1rem;

  img {
    max-width: 3rem;
    margin-right: 1rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: .5rem;
  }
`
