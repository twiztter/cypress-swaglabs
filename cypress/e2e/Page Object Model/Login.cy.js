import Login from "../../pages/Login";

const login = new Login;

describe('App login', () => {
    before(function () {
        login.Login()
    })

    it('Login by front end', function () {
        login.ValidateUrl()
        console.log('hola mundo');
    });
});