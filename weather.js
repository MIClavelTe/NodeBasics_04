const https = require('https');
const api = require('./api.json');

function printMessage(place, temp, summary) {
    const title = `Forecast in ${place}:`;
    const desc = `Summary: ${summary}`;
    const weather = `Temperature: ${temp}˚F`
    console.log(title);
    console.log(desc);
    console.log(weather);
    console.log("");
  }
  
  function printError(message) {
    console.error(message);
  }
  
  