const weather = require('./weather.js');

const places = process.argv.slice(2);
places.forEach(weather.getWeather);