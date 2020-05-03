const request = require('request');

const forecast = (lat, lon, callback) => {
    // Weather request 
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=26efa4c02c0afd78d048cb26ff1c2cf2`;

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        }
        else if (body.cod !== 200) {
            callback('Unable to find location.', undefined);
        }
        else {
            callback(undefined, `${body.weather[0].description}. ${body.main.temp}°.`);
        }
    });
}

module.exports = forecast;