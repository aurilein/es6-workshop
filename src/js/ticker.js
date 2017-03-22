/**
 *
 */
class Ticker {

    /**
     * @param options
     * @param {Loader} loader
     * @param {Mapper} mapper
     * @param {Renderer} renderer
     */
    constructor(options, loader, mapper, renderer) {
        this.loader = loader;
        this.mapper = mapper;
        this.renderer = renderer;
    }

    tick() {
        // load data from URL
        this.loader.load("http://alphadev.local/workspace/es6-workshop/public/redaktion/ticker_text_1.json").then((json) => {

            const model = this.mapper.map(json);

            // render / display model / update current display
            this.renderer.render(model[0]);
        });
    }

}

exports.Ticker = Ticker;
