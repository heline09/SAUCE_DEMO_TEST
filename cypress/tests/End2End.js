import InventoryPage from '../pages/InventoryPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('Sauce Demo E2E Flow', () => {

  beforeEach(() => {
    cy.fixture('users').then((data) => {
      cy.login(data.standardUser.username, data.standardUser.password);
    });
  });

  it('Completes a checkout flow', () => {
    InventoryPage.addProductToCart('Sauce Labs Backpack');
    InventoryPage.openCart();
    cy.contains('Sauce Labs Backpack').should('be.visible');
    
    CheckoutPage.clickCheckout();
    CheckoutPage.fillCheckoutInfo('Luisa', 'Shikuku', '00100');
    CheckoutPage.finishCheckout();
    CheckoutPage.verifySuccessMessage();
  });
});