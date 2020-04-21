import axios from  "axios";

export async function getMovies(page, dispatch) {
  const response = await axios.get(
    `${process.env.REACT_APP_APIURL}/3/movie/now_playing?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=${page}`,
  )
  const data =  response.data.results

  dispatch({ type: 'GET_MOVIES', payload: data })
}