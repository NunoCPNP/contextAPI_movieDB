import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { IoIosCloseCircleOutline } from 'react-icons/io'

import { store } from '../store/store'

const SideBarItem = ({ id, poster_path, title, releaseDate }) => {
  const globalState = useContext(store)
  const { dispatch } = globalState

  return (
    <>
      <Item key={id}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        <div>
          <p>{title}</p>
          <span>Release Date: {releaseDate}</span>
        </div>
        <IoIosCloseCircleOutline
          onClick={() => dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id })}
          className="icon"
        />
      </Item>
    </>
  )
}

SideBarItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SideBarItem

const Item = styled('div')`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  margin: 1rem;

  img {
    border-radius: 0.5rem;
    max-width: 3rem;
    margin-right: 1rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 0.5rem;
  }

  .icon {
    cursor: pointer;
    font-size: 2rem;
    margin-right: 3rem;
  }
`
