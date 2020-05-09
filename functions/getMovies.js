const axios = require('axios')

exports.handler = function (event, context, callback) {
  const { APIURL, APIKEY } = process.env
  const { url, page } = JSON.parse(event.body)
  
  console.log("URL: ", url + "PAGE: ", page)
  console.log("URL: ", APIURL + "KEY: ", APIKEY)

  let api
  const nowPlaying = `${APIURL}/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=${page}`
  const getUpcoming = `${APIURL}/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=${page}`
  const getTopRated = `${APIURL}/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=${page}`

  if (url === 1) {
    api = nowPlaying
  } else if (url === 2) {
    api = getUpcoming
  } else if (url === 3) {
    api = getTopRated
  }

  const send = (body) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body),
    })
  }

  const getMovies = async () => {
    const response = await axios.get(api)
    const data = response.data.results

    send(data)
  }

  getMovies()
}
