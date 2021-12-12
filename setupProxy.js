const proxy = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(proxy('/cities', { target: 'http://localhost:5000' }))
  app.use(proxy('/data/2.5/*', { target: 'https://api.openweathermap.org' }))
}

