import axios from 'axios'

export async function getNowPlaying(page, dispatch) {
  const response = await axios.get(
    `${process.env.REACT_APP_APIURL}/3/movie/now_playing?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=${page}`,
  )
  const data = response.data.results

  dispatch({ type: 'GET_MOVIES', payload: data })
}

export async function getUpcoming(page, dispatch) {
  const response = await axios.get(
    `${process.env.REACT_APP_APIURL}/3/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=${page}`,
  )
  const data = response.data.results

  dispatch({ type: 'GET_MOVIES', payload: data })
}
