exports.handler = function (event, context, callback) {
  const { APIURL, APIKEY } = process.env

  console.log('Event: ', event)
  console.log('Context: ', context)

  const { name } = JSON.parse(event.body)

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ mse: `Hello ${name}` }),
  })
}
