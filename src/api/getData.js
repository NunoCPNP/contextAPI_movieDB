import axios from 'axios'

export async function getMovies(page, dispatch, url) {
  let api
  const nowPlaying = `${process.env.REACT_APP_APIURL}/3/movie/now_playing?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=${page}`
  const getUpcoming = `${process.env.REACT_APP_APIURL}/3/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=${page}`
  const getTopRated = `${process.env.REACT_APP_APIURL}/3/movie/top_rated?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=${page}`

  if (url === 1) {
    api = nowPlaying
  } else if (url === 2) {
    api = getUpcoming
  } else if (url === 3) {
    api = getTopRated
  }

  const response = await axios.get(api)
  const data = response.data.results

  dispatch({ type: 'GET_MOVIES', payload: data })
}

export const getMovie = async (id, setMovie) => {
  const url = `${process.env.REACT_APP_APIURL}/3/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`
  const response = await axios.get(url)
  const data = response.data

  setMovie(data)
}

export const getCredits = async (id, setCredits) => {
  const url = `${process.env.REACT_APP_APIURL}/3/movie/${id}/credits?api_key=${process.env.REACT_APP_APIKEY}`
  const response = await axios.get(url)
  const data = response.data

  setCredits(data)
}

export const getSimilar = async (id, setSimilar) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`
  const response = await axios.get(url)
  const data = response.data

  setSimilar(data)
}
