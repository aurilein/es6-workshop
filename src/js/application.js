/**
 * Setup module. Wire together components, inject dependencies, start application.
 */
const loader_module = require('./loader.js');
const mapper_module = require('./mapper.js');
const renderer_module = require('./renderer.js');
const ticker_module = require('./ticker.js');

const loader = new loader_module.Loader();
const mapper = new mapper_module.Mapper();
const renderer = new renderer_module.Renderer();

const ticker = new ticker_module.Ticker({}, loader, mapper, renderer);
ticker.tick();
