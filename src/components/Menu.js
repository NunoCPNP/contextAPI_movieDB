import React, { useContext } from 'react'
import styled from '@emotion/styled'

import { store } from '../store/store'

import { white, secondaryB } from '../styles/variables'

const Menu = () => {
  const globalState = useContext(store)
  const { dispatch } = globalState
  const selectedSection = globalState.state.selectedSection

  return (
    <List>
      <li>
        <span
          className={selectedSection === 1 ? 'active ' : ''}
          onClick={() => dispatch({ type: 'CHANGE_SECTION', payload: 1 })}
        >
          Now Playing
        </span>
      </li>
      <li>
        <span
          className={selectedSection === 2 ? 'active ' : ''}
          onClick={() => dispatch({ type: 'CHANGE_SECTION', payload: 2 })}
        >
          Up Coming
        </span>
      </li>
      <li>
        <span
          className={selectedSection === 3 ? 'active ' : ''}
          onClick={() => dispatch({ type: 'CHANGE_SECTION', payload: 3 })}
        >
          Top Rated
        </span>
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
    text-decoration: none;

    span {
      cursor: pointer;
      color: ${white};
      font-size: 2rem;
      font-weight: 700;
      text-shadow: rgb(38, 37, 51) 0px 2px 2px;
      letter-spacing: 0.1rem;
      background-size: 100% 200%;
      padding: 0px 0.5rem;

      &.active {
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
