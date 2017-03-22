const chai = require('chai');
const should = chai.should();

const mapper_module = require('mapper.js');

describe('Mapper', function () {
    it('should exist', function () {
        should.exist(mapper_module.Mapper);
    });
});
