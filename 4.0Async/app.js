const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch the weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.a, (errMsg, results) => {
  if (errMsg) {
    console.log(errMsg)
  } else {
    console.log(results.address);
    weather.getWeather(results.lat, results.lng, (errMsg, weatherRes) => {
      if (errMsg) {
        console.log(errMsg)
      } else {
        console.log(`Its currently ${weatherRes.temperature}. It feel like ${weatherRes.apparentTemperature}`);
      }
    });
  }

});



