import ItemBuyFlow from "../../pages/ItemBuyFlow";

const itemBuy = new ItemBuyFlow;

describe('Buying an item workflow', () => {
    before('login', () => {
        cy.login()
        Cypress.session.clearCurrentSessionData();
    });

    it('add to cart', () => {
        itemBuy.AddToCart();
    });

    it('Going to cart section', () => {
        itemBuy.CarSection();
    });

    it('Checkout button', () => {
        itemBuy.CheckoutButton();
    });

    it('Your information', () => {
        itemBuy.YourInformation();
    });

    it('Continue button', () => {
        itemBuy.ContinueButton();
    });

    it('Finish button', () => {
        itemBuy.FinishButton();
    });

    it('Backhome button', () => {
        itemBuy.BackhomeButton();
    });
});