/**
 * Create model from JSON.
 */
class Mapper {

    constructor() {
    }

    /**
     * @param json
     * @returns {News[]}
     */
    map(json) {
        // parse data, map / aggregate data
        const {title, text, date} = json[0];

        // create view model
        const model = [
            new News(title, text, date)
        ];

        return model;
    }

}

/**
 * Model of an news item displayed in ticker.
 */
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
