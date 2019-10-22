const {
  TRUELAYER_CLIENT_ID,
  TRUELAYER_CLIENT_SECRET,
  TRUELAYER_REDIRECT_URI
} = process.env;
const { AuthAPIClient } = require('truelayer-client');

exports.handler = async (event, context) => {
  // We only care to do anything if this is our POST request
  if (event.httpMethod !== 'POST' || !event.body) {
    console.log('GET request made...');
    callback(null, {
      statusCode,
      headers,
      body: 'No GET request handler'
    });
    return;
  }

  // Parse the body contents into an object
  const data = JSON.parse(event.body);

  // Make sure we have all required data. Otherwise, escape
  if (!data.code) {
    console.error('Required information is missing.');

    callback(null, {
      statusCode,
      headers,
      body: JSON.stringify({ status: 'missing-information' })
    });

    return;
  }

  // Create options manually (picked up automatically without TRUELAYER prefix)
  const options = {
    client_id: TRUELAYER_CLIENT_ID,
    client_secret: TRUELAYER_CLIENT_SECRET
  };

  // Create auth client instance
  const authClient = new AuthAPIClient(options);

  try {
    const tokens = await authClient.exchangeCodeForToken(
      TRUELAYER_REDIRECT_URI,
      data.code
    );

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tokens)
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
