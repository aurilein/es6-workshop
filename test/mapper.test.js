const chai = require('chai');
const should = chai.should();

const mapper_module = require('mapper.js');

describe('Mapper Module', function () {
    it('should contain mapper', function () {
        should.exist(mapper_module.Mapper);
    });
});

describe('Mapper', function () {
    const mapper = new mapper_module.Mapper();

    it('should exist', function () {
        should.exist(mapper);
    });

    it('should parse one news', function () {
        const newsList = mapper.map(jsonSingleNews);

        newsList.length.should.equal(1);
        shouldContainSingleNewsData(newsList[0]);
    });

});

const jsonSingleNews = [
    {
        "date": "2016-07-31",
        "title": "NewsTitle",
        "text": "NewsText"
    }
];

function shouldContainSingleNewsData(news) {
    news.title.should.equal('NewsTitle');
    news.text.should.equal('NewsText');
    news.date.should.equal('2016-07-31');
}
