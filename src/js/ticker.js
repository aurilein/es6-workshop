class Ticker {

    /**
     * @param options
     * @param {Renderer} renderer
     */
    constructor(options, renderer) {
        this.renderer = renderer;
    }

    tick() {
        // load data from URL
        // parse data
        // map / aggregate data
        // create view model
        // render / display model / update current display
        this.renderer.render("TICK TOCK");
    }

}

exports.Ticker = Ticker;
