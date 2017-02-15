var Loader = require('./loader.js');
var Mapper = require('./mapper.js');
var Renderer = require('./renderer.js');

class Ticker {

    constructor(options) {

    }

    tick() {
        // load data from URL
        // parse data
        // map / aggregate data
        // create view model
        // render / display model / update current display
        console.log("TICK TOCK");
    }

}

exports.Ticker = Ticker;
