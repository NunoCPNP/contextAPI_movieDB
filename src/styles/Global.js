import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap");
        
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
          }
      `}
    />
  )
}

export default GlobalStyle