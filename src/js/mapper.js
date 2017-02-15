class Mapper {

    constructor() {
    }

    x(json) {
        // parse data, map / aggregate data
        var {title, text, date } = json[0];

        // create view model
        const model = [
            new News(title, text, date)
        ];

        return model;
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

    getDate() {
        return this.date;
    }

}


exports.Mapper = Mapper;