import React, { useContext } from 'react'
import styled from '@emotion/styled'

import { store } from '../store/store'

import { secondaryA, white } from '../styles/variables'

const SideBar = () => {
  const globalState = useContext(store)
  const { state, dispatch } = globalState

  return (
    <Container>
      {state.wishlist.map((movie) => (
        <Item key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <div>
            <p onClick={() => dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: movie.id })}>{movie.title}</p>
            <span>Release Date: {movie.release_date}</span>
          </div>
        </Item>
      ))}
    </Container>
  )
}

export default SideBar

const Container = styled('div')`
  background-color: ${secondaryA};
  color: ${white};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  min-width: 50rem;
  padding-top: 6rem;
`
const Item = styled('div')`
  display: flex;
  align-items: center;
  margin: 1rem;

  img {
    border-radius: 0.5rem;
    max-width: 3rem;
    margin-right: 1rem;
  }

  p {
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
  }
`
