const request = require('request');


let geocodeAddress = (address) => {

    return new Promise((resolve, reject) => {
        const adr = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${adr}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("Unable to connect to goole");
            } else if (body.status === 'ZERO_RESULTS') {
                reject("Unable to find that address")
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    lat: body.results[0].geometry.location.lat,
                    lng: body.results[0].geometry.location.lng,
                });
            }

        });
    });
};

geocodeAddress('000werdsf00').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch((err) => {
    console.log(`In catch: ${err}`);
});