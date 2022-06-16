let expect = require('chai').expect;
let mathEnforcer = require('../mathEnforcer')

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('check velue incorect type',() => {
            expect(mathEnforcer.addFive('0')).to.undefined
        })
        it('check positive velue addFive',() => {
            expect(mathEnforcer.addFive(10)).to.equal(15)
        })
        it('check negative velue addFive',() => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5)
        })
        it('check closeTo',() => {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01)
        })
    })
    describe('subtractTen', () => {
        it('check velue incorect type',() => {
            expect(mathEnforcer.subtractTen('0')).to.undefined
        })
        it('check positive velue subtractTen',() => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10)
        })
        it('check negative velue subtractTen',() => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
        })
        it('check closeTo',() => {
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01)
        })
    })
    describe('sum', () => {
        it('check first velue incorect type',() => {
            expect(mathEnforcer.sum('0', 0)).to.undefined
        })
        it('check second velue incorect type',() => {
            expect(mathEnforcer.sum(0, '0')).to.undefined
        })
        it('check positive velue sum',() => {
            expect(mathEnforcer.sum(0.1, 0.1)).to.equal(0.2)
        })
        it('check negative velue sum',() => {
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2)
        })
        it('check first negative velue sum',() => {
            expect(mathEnforcer.sum(-1, 1)).to.equal(0)
        })
        it('check second negative velue sum',() => {
            expect(mathEnforcer.sum(1, -1)).to.equal(0)
        })
    })
})