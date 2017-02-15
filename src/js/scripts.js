// list all modules to pack

require('./01/hello.js');
const ticker_module = require('./ticker.js');

const ticker = new ticker_module.Ticker({});
ticker.tick();
