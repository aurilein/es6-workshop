// 01
require('./01/hello.js');

// ticker
const ticker_module = require('./ticker.js');
const ticker = new ticker_module.Ticker({});
ticker.tick();