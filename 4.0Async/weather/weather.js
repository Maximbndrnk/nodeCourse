const request = require('request');

const VEATHER_API_KEY = 'aa22a3b79019fc77c6d95e20b2353d20';

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${VEATHER_API_KEY}/${lat},${lng}`,
        json: true
      }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to weather");
        } else if (body.code === 400) {
            callback("Unable to find that address");
        } 
        callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
        });
      
      });
}


module.exports.getWeather = getWeather;