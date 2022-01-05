const request = require('request');
const chalk = require('chalk');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(chalk.yellowBright('Enter: '), (inp) => {
    weather(inp)
})
const weather = (place) => {
    request(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoibXVua2h6dWwxIiwiYSI6ImNrdWk2dDl6eTA3MzczM282ZTNvcjRxZHgifQ.OIlhVXt7twKsf4IDM1WvOw`, function(error1, response1, body1) {
        // console.error('error:', error);
        // console.log('statusCode:', response && response.statusCode);
        if (JSON.parse(body1).features.length > 1) {
            console.log(chalk.cyanBright("There is more than 1 place with the same name choose one:"))
            for (let i = 1; JSON.parse(body1).features.length >= i; i++) {
                console.log(chalk.magentaBright(i + ": " + JSON.parse(body1).features[i - 1].text));
            }
            rl.question(chalk.yellowBright('Enter No of place you choose: '), (ip) => {
                const options = {
                    method: 'GET',
                    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
                    qs: { lon: JSON.parse(body1).features[ip - 1].center[0], lat: JSON.parse(body1).features[ip - 1].center[1] },
                    headers: {
                        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
                        'x-rapidapi-key': '2ef4015705msh892a474641a83f5p1e3658jsnd5aa7897a0a5',
                        useQueryString: true
                    }
                };
                request(options, function(error2, response2, body2) {
                    if (error2) throw new Error(error2);
                    // console.log('statusCode:', response && response.statusCode);
                    console.log(chalk.greenBright("Place: ") + chalk.blueBright(JSON.parse(body2).data[0].city_name));
                    console.log(chalk.greenBright("Wind speed: ") + chalk.blueBright(JSON.parse(body2).data[0].wind_spd + ""));
                    console.log(chalk.greenBright("Temperature: ") + chalk.blueBright(JSON.parse(body2).data[0].temp + "°C"));
                    console.log(chalk.greenBright("Chance for snow: ") + chalk.blueBright(JSON.parse(body2).data[0].snow + "%"));
                });
                rl.close();
            })
        } else {
            const options = {
                method: 'GET',
                url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
                qs: { lon: JSON.parse(body1).features[0].center[0], lat: JSON.parse(body1).features[0].center[1] },
                headers: {
                    'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
                    'x-rapidapi-key': '2ef4015705msh892a474641a83f5p1e3658jsnd5aa7897a0a5',
                    useQueryString: true
                }
            };
            request(options, function(error2, response2, body2) {
                if (error2) throw new Error(error2);
                // console.log('statusCode:', response && response.statusCode);
                console.log(chalk.greenBright("Place: ") + chalk.blueBright(JSON.parse(body2).data[0].city_name));
                console.log(chalk.greenBright("Wind speed: ") + chalk.blueBright(JSON.parse(body2).data[0].wind_spd + ""));
                console.log(chalk.greenBright("Temperature: ") + chalk.blueBright(JSON.parse(body2).data[0].temp + "°C"));
                console.log(chalk.greenBright("Chance for snow: ") + chalk.blueBright(JSON.parse(body2).data[0].snow + "%"));
            });
        }

    });
}