const chai = require('chai');
const should = chai.should();

const mapper_module = require('mapper.js');

describe('Mapper', function () {
    it('should exist', function () {
        should.exist(mapper_module.Mapper);
    });

    it('should parse one news', function () {
        const newsJson = [
            {
                "date": "2016-07-31",
                "title": "NewsTitle",
                "text": "NewsText"
            }
        ];
        const mapper = new mapper_module.Mapper();

        const newsList = mapper.map(newsJson);

        newsList.length.should.equal(1);
        const news = newsList[0];
        news.title.should.equal('NewsTitle');
        news.text.should.equal('NewsText');
        news.date.should.equal('2016-07-31');
    });

});
