import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

//* Global State
import { store } from '../store/store'

//* Styles
import { white, secondaryB } from '../styles/variables'

const Menu = () => {
  const globalState = useContext(store)
  const { dispatch } = globalState
  const selectedSection = globalState.state.selectedSection

  return (
    <List>
      <li>
        <Link
          to="/"
          className={selectedSection === 1 ? 'active ' : ''}
          onClick={() => dispatch({ type: 'CHANGE_SECTION', payload: 1 })}
        >
          Now Playing
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className={selectedSection === 2 ? 'active ' : ''}
          onClick={() => dispatch({ type: 'CHANGE_SECTION', payload: 2 })}
        >
          Up Coming
        </Link>
      </li>
      <li>
        <Link
          to="/"
          className={selectedSection === 3 ? 'active ' : ''}
          onClick={() => dispatch({ type: 'CHANGE_SECTION', payload: 3 })}
        >
          Top Rated
        </Link>
      </li>
    </List>
  )
}

export default Menu

const List = styled('div')`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    padding: 0 3rem;

    a {
      color: ${white};
      font-size: 2rem;
      font-weight: 700;
      text-shadow: rgb(38, 37, 51) 0px 2px 2px;
      letter-spacing: 0.1rem;
      padding: 0px 0.5rem;
      text-decoration: none;

      &.active {
        background-size: 100% 200%;
        background-image: linear-gradient(
          transparent 0%,
          transparent calc(50% - 0.7rem),
          ${secondaryB} calc(50% - 0.7rem),
          ${secondaryB} 100%
        );
      }
    }
  }
`
