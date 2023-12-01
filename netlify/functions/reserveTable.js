

// functions/reserveTable.js
const axios = require('axios');

exports.handler = async function(event) {
  // Parse the request body from the event
  const requestBody = JSON.parse(event.body);

  // Extract the necessary data from the request body
  const { name, email, date, time, partySize } = requestBody;

  // Make an HTTP request to your Django backend API
  try {
    const response = await axios.post('https://your-django-backend.com/api/reservations', {
      name,
      email,
      date,
      time,
      partySize
    });

    // Return the response from the Django backend
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    // Handle any errors that occur during the HTTP request
    return {
      statusCode: error.response.status || 500,
      body: JSON.stringify({ error: 'Reservation failed' })
    };
  }
};

