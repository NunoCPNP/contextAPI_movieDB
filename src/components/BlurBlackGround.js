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
  z-index: 3;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Background = styled('div')`
  width: 100vw;
  height: 100vh;
  background: ${primaryA};
  opacity: 0.9;
`
