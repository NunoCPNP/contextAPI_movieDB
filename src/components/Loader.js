import React from 'react'
import styled from '@emotion/styled'

const Loader = () => (
  <Wrapper>
    <div>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </Wrapper>
)

export default Loader

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 5rem);

  span {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: black;
    margin: 3.5rem .5rem;
  }

  span:nth-of-type(1) {
    animation: bounce 1s ease-in-out infinite;
  }

  span:nth-of-type(2) {
    animation: bounce 1s ease-in-out 0.33s infinite;
  }

  span:nth-of-type(3) {
    animation: bounce 1s ease-in-out 0.66s infinite;
  }

  @keyframes bounce {
    0%,
    75%,
    100% {
      transform: translateY(0);
    }

    25% {
      transform: translateY(-20px);
    }
  }
`
