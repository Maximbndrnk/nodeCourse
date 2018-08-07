const yargs = require('yargs');
const axios = require('axios');
const VEATHER_API_KEY = 'aa22a3b79019fc77c6d95e20b2353d20';

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

const adr = encodeURIComponent(argv.address);
let geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${adr}`;

axios.get(geoUrl).then((response) => {
  if (response.data.status == 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }

  let lat = response.data.results[0].geometry.location.lat;
  let lng = response.data.results[0].geometry.location.lng;
  let weatherUrl = `https://api.darksky.net/forecast/${VEATHER_API_KEY}/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response)=>{
  let temperature = response.data.currently.temperature;
  let apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`Its currently ${(temperature-32)/1.8}. It feels like ${(apparentTemperature-32)/1.8}`);
}).catch((e) => {
  if (e.code == 'ENOTFOUND') {
    console.log(`Unable to connect to API servers`);
  } else {
    console.log(e.message);
  }
});