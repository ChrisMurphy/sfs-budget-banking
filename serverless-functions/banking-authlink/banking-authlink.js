const {
  TRUELAYER_CLIENT_ID,
  TRUELAYER_CLIENT_SECRET,
  TRUELAYER_REDIRECT_URI
} = process.env;
const { AuthAPIClient } = require('truelayer-client');

exports.handler = async (event, context) => {
  // Create options manually (picked up automatically without TRUELAYER prefix)
  const options = {
    client_id: TRUELAYER_CLIENT_ID,
    client_secret: TRUELAYER_CLIENT_SECRET
  };

  // Create auth client instance
  const authClient = new AuthAPIClient(options);

  // Define array of permission scopes
  const scopes = [
    'info',
    'accounts',
    'balance',
    'transactions',
    'offline_access'
  ];

  const config = {
    scope: scopes,
    redirectURI: TRUELAYER_REDIRECT_URI,
    nonce: 'foobar',
    state: '',
    responseMode: '',
    enableMock: true
  };

  try {
    const authURL = authClient.getAuthUrl(config);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(authURL)
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
