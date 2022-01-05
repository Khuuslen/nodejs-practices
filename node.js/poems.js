const chalk = require('chalk');
const request = require('request');
request('https://www.poemist.com/api/v1/randompoems', function (error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode); 
  console.log(chalk.greenBright('body:', body));
});

