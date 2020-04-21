import React from "react"
import styled from "@emotion/styled"

import Button from "./Button"

const Movie = ({ id, title, poster }) => {
  return (
    <Container>
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} loading="lazy" />
      <Button id={id} />
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
`