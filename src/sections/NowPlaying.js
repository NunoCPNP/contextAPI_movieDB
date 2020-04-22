import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from '@emotion/styled'

import SideBar from '../components/SideBar'
import Movie from '../components/Movie'

import { store } from '../store/store'

import { getNowPlaying } from '../api/getMovies'

import { secondaryB } from '../styles/variables'

const NowPlaying = () => {
  const globalState = useContext(store)
  const { dispatch, state } = globalState

  const [page, setPage] = useState(1)

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    getNowPlaying(page, dispatch)
    setPage((prevState) => prevState + 1)
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (inView === true) {
      getNowPlaying(page, dispatch)
      setPage((prevState) => prevState + 1)
    }
    //eslint-disable-next-line
  }, [inView])

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

const Intersection = styled('div')`
  text-align: center;
  color: ${secondaryB};
  font-size: 4rem;
  padding-bottom: 1rem;
`
