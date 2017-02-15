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

        var {title, text, date } = {title:'Breaking News',text:"TICK TOCK",date:'11.2.2017'};

        const model = [
            new News(title, text, date)
        ];
        // render / display model / update current display
        this.renderer.render(model[0]);
    }

}

class News {

    constructor(title,text,date) {
        this.title = title;
        this.text = text;
        this.date = date;
    }

    getText() {
        return this.text;
    }

}

exports.Ticker = Ticker;
