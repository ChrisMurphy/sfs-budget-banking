const { TRUELAYER_CLIENT_ID } = process.env;

exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: TRUELAYER_CLIENT_ID
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
