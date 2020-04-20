import React from "react"
import styled from "@emotion/styled"

const Movie = ({ title, poster }) => {
  return (
    <Container>
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} loading="lazy" />
      <button>Add to Wishlist</button>
    </Container> 
  )
}

export default Movie

const Container = styled('div')`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;

  img {
    width: 100%;
  }

  button {
    background: none;
    border: 0.1rem solid black;
    cursor: pointer;
    width: 100%;
    transition: all 300ms linear 0s;
    padding: 0.4rem;
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;

    :hover {
      color: white;
      background-color: black;
      border: 0.1rem solid black;
    }
  }
`