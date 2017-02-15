class Ticker {

    /**
     * @param options
     * @param {Loader} loader
     * @param {Renderer} renderer
     */
    constructor(options, loader, renderer) {
        this.loader = loader;
        this.renderer = renderer;
    }

    tick() {
        // load data from URL
        this.loader.load("http://alphadev.local/workspace/es6-workshop/public/redaktion/ticker_text_1.json").then((response) => {
            // parse data

            // map / aggregate data
            var {title, text, date } = {title: 'Breaking News', text: "TICK TOCK", date: '11.2.2017'};

            // create view model
            const model = [
                new News(title, text, date)
            ];

            // render / display model / update current display
            this.renderer.render(model[0]);
        });
    }

}

class News {

    constructor(title, text, date) {
        this.title = title;
        this.text = text;
        this.date = date;
    }

    getText() {
        return this.text;
    }

}

exports.Ticker = Ticker;
