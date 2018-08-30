const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');


describe('App', () => {

    let db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('max',25);
        expect(spy).toHaveBeenCalledWith('max',25);
    });

    it('should call saveUser with user obj', () => {
        let email = 'e@e.com';
        let password = '123';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });

})