class ItemBuyFlow {
    Login() {
        cylogin()
    }

    AddToCart() {
        cy.get('.title').contains('Products');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    CarSection() {
        cy.get('.shopping_cart_link').click();
        cy.get('.title').contains('Your Cart');
    }

    CheckoutButton(){
        cy.get('[data-test="checkout"]').click();
    }

    YourInformation(){
        cy.get('[data-test="firstName"]').type('Alexis');
        cy.get('[data-test="lastName"]').type('Silva');
        cy.get('[data-test="postalCode"]').type('86060');
        cy.get('.title').contains('Checkout: Your Information');
    }

    ContinueButton(){
        cy.get('[data-test="continue"]').click();
        cy.get('.title').contains('Checkout: Overview');
    }

    FinishButton(){
        cy.get('[data-test="finish"]').click();
    }

    BackhomeButton(){
        cy.get('.title').contains('Checkout: Complete!');
        cy.get('.complete-header').contains('Thank you for your order');
        cy.get('.pony_express').should('be.visible');
        cy.get('[data-test="back-to-products"]').click();
    }

}

export default ItemBuyFlow;