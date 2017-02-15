// ticker
const loader_module = require('./loader.js');
const mapper_module = require('./mapper.js');
const renderer_module = require('./renderer.js');
const ticker_module = require('./ticker.js');

const renderer = new renderer_module.Renderer();

const ticker = new ticker_module.Ticker({}, renderer);
ticker.tick();
