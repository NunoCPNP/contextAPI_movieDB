import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styled from '@emotion/styled'

import SideBar from '../components/SideBar'
import Movie from '../components/Movie'

import { store } from '../store/store'

import { getMovies } from "../api/getMovies"

const NowPlaying = () => {
  const globalState = useContext(store)
  const { dispatch, state } = globalState
  
  const [isFetching, setIsFetching] = useState(false)
  const [page, setPage] = useState(1)

  function isScrolling() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return
    } else {
      setIsFetching(true)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, [])
  
  useEffect(() => {
    getMovies(page, dispatch)
  }, [page])

  useEffect(() => {
    if (isFetching) {
      setPage((prevState) => prevState + 1)
    }
  }, [isFetching])

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
