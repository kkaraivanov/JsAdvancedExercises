let expect = require('chai').expect;
let isOddOrEven = require('../evenOrOdd');

describe('Test evenOrOdd', () => {
    it('number should by undefined', () => {
        expect(isOddOrEven(1)).to.undefined;
    })
    it('bool should by undefined', () => {
        expect(isOddOrEven(true)).to.undefined;
    })
    it('array should by undefined', () => {
        expect(isOddOrEven([])).to.undefined;
    })
    it('object should by undefined', () => {
        expect(isOddOrEven({})).to.undefined;
    })
    it('\\Hi!\\ should by odd', () => {
        expect(isOddOrEven('Hi!')).to.equal('odd');
    })
    it('\\Hello!\\ should by even', () => {
        expect(isOddOrEven('Hello!')).to.equal('even');
    })
})