import React, { useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from '@emotion/styled'
import axios from 'axios'

import { store } from '../store/store'

import SideBar from '../components/SideBar'
import Movie from '../components/Movie'

const NowPlaying = () => {
  const globalState = useContext(store)
  const { dispatch, state } = globalState

  useEffect(() => {
    ;(async function getMovies() {
      const response = await axios.get(
        `${process.env.REACT_APP_APIURL}/3/movie/now_playing?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`,
      )
      const data = response.data.results
      dispatch({ type: 'GET_MOVIES', payload: data })
    })()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <AnimatePresence>
        {state.isSideBarOpen && (
          <Animation initial={{}} animate={{ x: 30 }} exit={{ x: 500 }}>
            <SideBar />
          </Animation>
        )}
      </AnimatePresence>
      <GridContainer>
        {state.movies.map((movie) => (
          <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} />
        ))}
      </GridContainer>
    </>
  )
}

export default NowPlaying

const GridContainer = styled('div')`
  margin: auto;
  padding: 8rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  max-width: 120rem;
  grid-gap: 2rem;
`

const Animation = styled(motion.div)`
  z-index: 5;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
`