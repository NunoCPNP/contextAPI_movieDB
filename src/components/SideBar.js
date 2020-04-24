import React, { useContext } from 'react'
import styled from '@emotion/styled'

//* Components
import SideBarItem from './SideBarItem'

//* Global State
import { store } from '../store/store'

//* Styles
import { secondaryA, white } from '../styles/variables'

const SideBar = () => {
  const globalState = useContext(store)
  const { state } = globalState

  return (
    <Container>
      {state.wishlist.map((movie) => (
        <SideBarItem
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          releaseDate={movie.release_date}
        />
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
  min-width: 41.4rem;
  padding-top: 6rem;
`
