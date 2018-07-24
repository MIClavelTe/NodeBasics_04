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
  
  function getWeather(lat, long) {
    try {
      if (response.statusCode === 200) {
        const request = https.get(`https://api.darksky.net/forecast/${api.key}/${lat},${long}`, response => {
          let body = ""
        
          response.on('data', data => {
            body += data.toString();
          });
  
          response.on('end', () => {
            try {
              var forecast = JSON.parse(body);                        
              printMessage(forecast.timezone, forecast.currently.temperature, forecast.currently.summary);
            } catch (error) {
              console.error('Your input does not exist');
            }
          }); 

        });
        request.on('error', error => printError('Problem with Request'));
      } else {
        const statusError = `Status Code: ${response.statusCode}`;
        printError(statusError);
      }

    } catch (error) {
      printError('Problem with Request');
    }
}
  