let expect = require('chai').expect;
let PaymentPackage = require('../paymentPackage');

describe('Test PaymentPackage function', () => {
    describe('Invalid instantiations', () => {
        it('with 0 params', () => {
            expect(() => x = new PaymentPackage()).to.throw();
        });

        it('with 1 param', () => {
            expect(() => x = new PaymentPackage('HR Services')).to.throw();
        });

        it('with invalid name', () => {
            expect(() => x = new PaymentPackage('', 0)).to.throw('Name must be a non-empty string');
            expect(() => x = new PaymentPackage(0, 0)).to.throw('Name must be a non-empty string');
        });

        it('with invalid price', () => {
            expect(() => x = new PaymentPackage('Name', 'noNumber')).to.throw('Value must be a non-negative number');
            expect(() => x = new PaymentPackage('Name', -1)).to.throw('Value must be a non-negative number');
        });
    });

    describe('Test instantiations',() => {
        beforeEach(() => {
            x = new PaymentPackage('HR Services', 1500);
        });

        it('get VAT', () => {
            expect(x.VAT).to.equal(20);
        });

        it('set invalid VAT', () => {
            expect(() => x.VAT = 'noNumber').to.throw('VAT must be a non-negative number');
            expect(() => x.VAT = -1).to.throw('VAT must be a non-negative number');
        })

        it('get active', () => {
            expect(x.active).to.be.true;
        });

        it('set invalid active', () => {
            expect(() => x.active = '').to.throw('Active status must be a boolean');
        });

        it('set null active', () => {
            expect(() => x.active = null).to.throw('Active status must be a boolean');
        });

        it('get name', () => {
            expect(x.name).to.equal('HR Services');
        });

        it('set invalid name', () => {
            expect(() => x.name = '').to.throw('Name must be a non-empty string');
            expect(() => x.name = 1).to.throw('Name must be a non-empty string');
        });

        it('get value', () => {
            expect(x.value).to.equal(1500);
        });

        it('set invalid value', () => {
            expect(() => x.value = '').to.throw('Value must be a non-negative number');
            expect(() => x.value = -1).to.throw('Value must be a non-negative number');
        });
    });

    describe('Test change velues',() => {
        beforeEach(() => {
            x = new PaymentPackage('HR Services', 1500);
        });

        it('change active false', () => {
            x.name = 'Consultation';
            x.value = 0;
            x.VAT = 0;
            x.active = false;
            expect(x.name).to.eq('Consultation');
            expect(x.value).to.eq(0);
            expect(x.VAT).to.eq(0);
            expect(x.active).to.eq(false);
            expect(x.toString()).to.eq('Package: Consultation (inactive)\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0');
        });

        it('change all to valid values', () => {
            x.name = 'Consultation';
            x.value = 800;
            x.VAT = 20;
            x.active = true;
            expect(x.name).to.eq('Consultation');
            expect(x.value).to.eq(800);
            expect(x.VAT).to.eq(20);
            expect(x.active).to.eq(true);
            expect(x.toString()).to.eq('Package: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960');
        });

        it('chamge decimal VAT', () => {
            x.name = 'Consultation';
            x.value = 10;
            x.VAT = 20.5;
            x.active = true;
            expect(x.name).to.eq('Consultation');
            expect(x.value).to.eq(10);
            expect(x.VAT).to.eq(20.5);
            expect(x.active).to.eq(true);
            expect(x.toString()).to.eq('Package: Consultation\n- Value (excl. VAT): 10\n- Value (VAT 20.5%): 12.05');
        })

        it('chamge decimal value', () => {
            x.name = 'Consultation';
            x.value = 10.5;
            x.VAT = 20;
            x.active = true;
            expect(x.name).to.eq('Consultation');
            expect(x.value).to.eq(10.5);
            expect(x.VAT).to.eq(20);
            expect(x.active).to.eq(true);
            expect(x.toString()).to.eq('Package: Consultation\n- Value (excl. VAT): 10.5\n- Value (VAT 20%): 12.6');
        });

        it('expect toString', () => {
            expect(x.toString()).to.eq('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });

        it('expect toString with (inactive)', () => {
            x.active = false;
            expect(x.toString()).to.eq('Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });
    })
})