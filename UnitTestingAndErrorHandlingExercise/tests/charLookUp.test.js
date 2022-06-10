let expect = require('chai').expect;
let lookupChar = require('../charLookUp')

describe('Test lookupChar function', () => {
    it('first value incorect type should by return undefined', () => {
        expect(lookupChar(0, 0)).to.undefined;
    })
    it('second value incorect type should by return undefined', () => {
        expect(lookupChar('Hi', 'test')).to.undefined;
    })
    it('second value corect type should by return undefined', () => {
        expect(lookupChar('Hi', 0.1)).to.undefined;
    })
    it('input negative index should by return Incorrect index', () => {
        expect(lookupChar('Hi', -1)).to.equal('Incorrect index');
    })
    it('input length <= index should by return Incorrect index', () => {
        expect(lookupChar('Hi', 3)).to.equal('Incorrect index');
    })
    it('Hi with index 0 should by return H', () => {
        expect(lookupChar('Hi', 0)).to.equal('H');
    })
})