import styled from '@emotion/styled'

//* Styles
import { secondaryB, white } from '../styles/variables'

export const MovieContainer = styled('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 3rem;
`
export const Cover = styled('div')`
  img {
    border-radius: 0.5rem;
  }
`

export const Details = styled('div')`
  color: ${white};
  padding: 2rem;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    text-shadow: rgb(38, 37, 51) 0px 2px 2px;
    letter-spacing: 0.1rem;
  }

  h3 {
    display: inline-block;
    padding: 2rem 0.3rem 0 0.3rem;
    font-size: 2rem;
    font-weight: 600;
    text-shadow: rgb(38, 37, 51) 0px 2px 2px;
    margin-right: 1rem;
    background-size: 100% 200%;
    background-image: linear-gradient(
      transparent 0%,
      transparent calc(50% - 0.7rem),
      ${secondaryB} calc(50% - 0.7rem),
      ${secondaryB} 100%
    );
  }

  ul {
    display: flex;
    list-style: none;

    li {
      font-size: 1.5rem;
      padding: 0 0.3rem;
      font-weight: 600;
      text-shadow: rgb(38, 37, 51) 0px 2px 2px;
      margin-right: 1rem;
      background-size: 100% 200%;
      background-image: linear-gradient(
        transparent 0%,
        transparent calc(50% - 0.5rem),
        ${secondaryB} calc(50% - 0.5rem),
        ${secondaryB} 100%
      );
    }
  }

  .overview {
    padding-top: 4rem;
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`

export const Header = styled('div')`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-row-gap: 1rem;

  .info {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.5rem;
    padding: 0 0.3rem;
    font-weight: 600;
    text-shadow: rgb(38, 37, 51) 0px 2px 2px;

    span {
      padding-left: 1rem;
      color: ${secondaryB};
      font-size: 2rem;
    }
  }

  .genre {
    display: flex;
    align-items: center;
  }
`

export const Cast = styled('div')`
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  color: ${white};
  font-weight: 600;
  font-size: 1.3rem;

  img {
    width: 100%;
    border-radius: 1rem;
  }
`
