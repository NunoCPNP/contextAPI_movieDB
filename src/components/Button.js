import React, { useContext } from "react"
import PropTypes from 'prop-types';
import styled from "@emotion/styled"

import { store } from "../store/store"

const Button = ({id}) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return (
    <StyledButton onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: id })}>Add to Wishlist</StyledButton>
  )
}

Button.propTypes = {
  id: PropTypes.number.isRequired
}

export default Button

const StyledButton = styled('button')`
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
    font-weight: 600;
  }
`