import React, { useState, useEffect, useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

//* Components
import SideBar from '../components/SideBar'
import Movie from '../components/Movie'

//* Global State
import { store } from '../store/store'

//* API
import { getMovies } from '../api/getData'

//* Styles
import { Animation, GridContainer, Intersection } from './Home.styles'

const NowPlaying = () => {
  const globalState = useContext(store)
  const { dispatch, state } = globalState

  const selectedSection = state.selectedSection

  const [page, setPage] = useState(1)

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    dispatch({ type: 'RESET_MOVIES' })
    getMovies(1, dispatch, selectedSection)
    setPage(2)
  }, [selectedSection])

  useEffect(() => {
    if (inView === true) {
      getMovies(page, dispatch, selectedSection)
      setPage((prevState) => prevState + 1)
    }
  }, [inView])

  return (
    <>
      <AnimatePresence>
        {state.isSideBarOpen && (
          <Animation initial={{ x: 0 }} animate={{ x: 30 }} exit={{ x: 500 }}>
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
