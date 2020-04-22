import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { black, secondaryB } from '../styles/variables'

const Votes = ({ vaverage }) => {
  return (
    <StyledDiv>
      <span>votes: </span>
      {vaverage}
    </StyledDiv>
  )
}

Votes.propTypes = {
  vaverage: PropTypes.number.isRequired,
}

export default Votes

const StyledDiv = styled('div')`
  z-index: 5;
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: ${secondaryB};
  color: ${black};
  font-weight: 600;
  padding: 0.3rem 1rem;
  border-radius: 0.2rem;

  span {
    font-size: 0.8rem;
  }
`
