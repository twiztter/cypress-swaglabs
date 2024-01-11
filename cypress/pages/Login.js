class Login {
    navigateToApp() {
        return cy.visit('');
    }

    FrontEndLogin() {
        cy.fixture("credentials").then((credentialsData) => {
            cy.get('[data-test="username"]').type(credentialsData.username);
            cy.get('[data-test="password"]').type(credentialsData.password);
        })
    }

    LoginButton() {
        cy.get('[data-test="login-button"]').click();
    }

    ValidateUrl(){
        const baseUrl = Cypress.config('baseUrl');
        //Validating the URL
        cy.url().should('eq', `${baseUrl}/inventory.html`);
    }

}

export default Login;