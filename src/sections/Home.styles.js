import styled from '@emotion/styled'
import { motion } from 'framer-motion'

//* Styles
import { secondaryB } from '../styles/variables'

export const GridContainer = styled('div')`
  margin: auto;
  padding: 2rem 2rem 8rem 2rem;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  max-width: 120rem;
  grid-gap: 2rem;
`

export const Animation = styled(motion.div)`
  z-index: 5;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
`

export const Intersection = styled('div')`
  text-align: center;
  color: ${secondaryB};
  font-size: 4rem;
  padding-bottom: 1rem;
`
