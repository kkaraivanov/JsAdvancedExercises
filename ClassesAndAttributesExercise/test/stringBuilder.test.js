let expect = require('chai').expect;
let StringBuilder = require('../stringBuilder')

describe('test stringBuilder', () => {
    describe('test instantiated', () => {
        it('with no string parameter', () => {
            expect(() => new StringBuilder(1)).to.throw('Argument must be a string')
        })

        it('with no parameter', () => {
            let sb = new StringBuilder();
            expect(sb.toString()).to.equal('');
        });

        it('with 1 letter as param', () => {
            let sb = new StringBuilder('a');
            expect(sb.toString()).to.equal('a');
        });
    })

    describe('test functionality', () => {
        describe('append method', () => {
            it('with invalid input', () => {
                let sb = new StringBuilder('hello');
                expect(() => sb.append(undefined)).to.throw('Argument must be a string');
                expect(() => sb.append(1)).to.throw('Argument must be a string');
                expect(() => sb.append()).to.throw('Argument must be a string');
            });
        })

        describe('prepend method', () => {
            it('with invalid input', () => {
                let sb = new StringBuilder('test');
                expect(() => sb.prepend(undefined)).to.throw('Argument must be a string');
                expect(() => sb.prepend(1)).to.throw('Argument must be a string');
                expect(() => sb.prepend()).to.throw('Argument must be a string');
            });
        })

        describe('insertAt method', () => {
            beforeEach(() => {
                sb = new StringBuilder('test');
            });

            it('invalid insert', () => {
                expect(() => sb.insertAt(undefined, 0)).to.throw('Argument must be a string');
                expect(() => sb.insertAt(1, 0)).to.throw('Argument must be a string');
                expect(() => sb.insertAt(undefined)).to.throw('Argument must be a string');
                expect(() => sb.insertAt()).to.throw('Argument must be a string');
            });
        })

        describe('remove method', () => {
            beforeEach(() => {
                sb = new StringBuilder('test');
            });
            it('invalid length', () => {
                sb.remove(5, 1);
                expect(sb.toString()).to.eq('test');
            });
        })

        it('toString method', () => {
            const expected = 'abcdef=>';
            const sb = new StringBuilder();
            expected.split('').forEach(s => {sb.append(s); sb.prepend(s);});
            sb.insertAt('test', 3);
            sb.remove(2, 4);
            expect(sb.toString()).to.equal('>=tedcbaabcdef=>');
        });
    })
})