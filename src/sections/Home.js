import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from '@emotion/styled'

import BlurBackground from '../components/BlurBlackGround'
import SideBar from '../components/SideBar'
import Movie from '../components/Movie'

import { store } from '../store/store'

import { getMovies } from '../api/getMovies'

import { secondaryB } from '../styles/variables'

const NowPlaying = () => {
  const globalState = useContext(store)
  const { dispatch, state } = globalState

  const selectedSection = state.selectedSection

  const [page, setPage] = useState(1)

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    setPage(1)
    console.log('Page:  ', page)
    console.log('Selected Section: ', selectedSection)
    dispatch({ type: 'RESET_MOVIES' })
  }, [selectedSection])

  useEffect(() => {
    dispatch({ type: 'RESET_MOVIES' })
    dispatch({ type: 'GET_WISHLIST_FROM_STORAGE' })
    getMovies(page, dispatch, selectedSection)
    setPage((prevState) => prevState + 1)
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (inView === true) {
      getMovies(page, dispatch, selectedSection)
      setPage((prevState) => prevState + 1)
    }
    //eslint-disable-next-line
  }, [inView])

  return (
    <>
      <AnimatePresence>
        {state.isSideBarOpen && (
          <>
            <motion.div initial={{ x: 2000 }} animate={{ x: 0 }} exit={{ x: 2000 }}>
              <BlurBackground />
            </motion.div>
            <Animation initial={{ x: 0 }} animate={{ x: 30 }} exit={{ x: 500 }}>
              <SideBar />
            </Animation>
          </>
        )}
      </AnimatePresence>
      <GridContainer>
        {state.movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            vaverage={movie.vote_average}
          />
        ))}
      </GridContainer>
      <Intersection ref={ref}>...</Intersection>
    </>
  )
}

export default NowPlaying

const GridContainer = styled('div')`
  margin: auto;
  padding: 2rem 2rem 8rem 2rem;
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

const Intersection = styled('div')`
  text-align: center;
  color: ${secondaryB};
  font-size: 4rem;
  padding-bottom: 1rem;
`
