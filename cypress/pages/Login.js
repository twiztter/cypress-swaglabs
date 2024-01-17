class Login {

    Login() {
        cy.login()
    }

    ValidateUrl() {
        const baseUrl = Cypress.config('baseUrl');
        cy.url().should('eq', `${baseUrl}/inventory.html`);
    }

}

export default Login;