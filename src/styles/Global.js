import React from 'react'
import { Global, css } from '@emotion/core'

import { primaryB } from './variables'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Cairo:400,700,900&display=swap');

        *,
        *::after,
        *::before {
          margin: 0rem;
          padding: 0rem;
          box-sizing: inherit;
        }
        html {
          font-size: 62.5%;
          scroll-behavior: smooth;
        }
        body {
          box-sizing: border-box;
          font-family: 'Montserrat', sans-serif;
          background-color: ${primaryB};
          overflow-x: hidden;
        }
      `}
    />
  )
}

export default GlobalStyle
