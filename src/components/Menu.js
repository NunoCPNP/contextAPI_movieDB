import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { white, secondaryB } from '../styles/variables'

const Menu = () => (
  <>
    <List>
      <li>
        <Link to="/">Now Playing</Link>
      </li>
      <li>
        <Link to="/upcoming">Up Coming</Link>
      </li>
      <li>
        <Link to="/toprated">Top Rated</Link>
      </li>
    </List>
  </>
)

export default Menu

const List = styled('div')`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    padding: 0 3rem;
    text-decoration: none;

    a:visited,
    a:link,
    a:hover,
    a:active {
      color: ${white};
      font-size: 2rem;
      font-weight: 700;
      text-decoration: none;

      text-shadow: rgb(38, 37, 51) 0px 2px 2px;
      letter-spacing: 0.1rem;
      background-image: linear-gradient(
        transparent 0%,
        transparent calc(50% - 0.7rem),
        ${secondaryB} calc(50% - 0.7rem),
        ${secondaryB} 100%
      );
      background-size: 100% 200%;
      padding: 0px 0.5rem;
    }
  }
`
