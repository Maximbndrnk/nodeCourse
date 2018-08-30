const expect = require('expect');

const utils = require('./utils');



// it('should expect some values', () => {
// expect(12).toNotBe(11);
// expect({name:'Max'}).toEqual({name:'Max'});
// expect({name:'max'}).toNotEqual({name:'Max'});
// expect([2,3,4]).toInclude(5);
// expect([2,3,4]).toExclude(5);
// expect({
//     name: 'Max',
//     age: 25
// }).toInclude({age:25});
// });

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            let res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
            // if (res !== 44) {
            //     throw new Error(`Expected 44, but get ${res}`);
            // }
        });
    })


    it('should square a number', () => {
        let res = utils.square(3);

        expect(res).toBe(9).toBeA('number');
    });

    it('should verify first nad last names', () => {
        let user = { loc: 'Kir', age: 26 };
        let res = utils.setName(user, 'Max Bon');

        expect(res).toInclude({ firstName: 'Max', lastName: 'Bon' });

    });

    it('Async add 2 numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

})
