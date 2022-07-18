const request = require('request');

const breedName = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  console.error('error: breed not found', error);
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  const data = JSON.parse(body);

  if (!breedName) {
    return 'Error, breed not found';
  } else {
    for (const item of data) {
      return item.description;
    }
  }
});