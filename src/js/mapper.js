/**
 * Create model from JSON.
 */
class Mapper { // !! Class - http://es6-features.org/#ClassDefinition

    constructor() {
    }

    /**
     * @param json
     * @returns {News[]}
     */
    map(json) {
        // parse data, map / aggregate data
        const {title, text, date} = json[0]; // !! destructuring assignment - http://es6-features.org/#ObjectMatchingShorthandNotation

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
        this._title = title;
        this._text = text;
        this._date = date;
    }

    get title() { // !! getter/setter - http://es6-features.org/#GetterSetter
        return this._title;
    }

    get text() {
        return this._text;
    }

    get date() {
        return this._date;
    }

}

exports.Mapper = Mapper;
