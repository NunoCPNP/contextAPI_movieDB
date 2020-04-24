import React from 'react'
import styled from '@emotion/styled'

import { primaryA } from '../styles/variables'

const BlurBackGround = () => {
  return (
    <Wrapper>
      <Background />
    </Wrapper>
  )
}

export default BlurBackGround

const Wrapper = styled('div')`
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Background = styled('div')`
  background: ${primaryA};
  opacity: 1;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
`
