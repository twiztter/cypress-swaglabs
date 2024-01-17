Cypress.Commands.add('login', () => {
    cy.visit('')
    cy.fixture("credentials").then((credentialsData) => {
        cy.get('[data-test="username"]').type(credentialsData.username);
        cy.get('[data-test="password"]').type(credentialsData.password);
        cy.get('[data-test="login-button"]').click();
    })
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
})