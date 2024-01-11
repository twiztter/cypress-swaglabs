import Login from "../../pages/Login";

const login = new Login;

describe('App login', () => {
    //Using credentials to login by fixtures
    before(function () {
        login.navigateToApp()
    })

    it('Login by front end', function () {
        login.FrontEndLogin()
        login.LoginButton()
        login.ValidateUrl()
    });
});