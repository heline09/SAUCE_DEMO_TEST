// /// <reference types= "cypress" />
// describe('Sauce Demo Login Test Suite', () => {
//     beforeEach(() => {
//         cy.visit(Cypress.env('url'));
//     });
//     it('Valid Login Test', () => {
  
//     cy.get('#user-name').type('standard_user');
//     cy.get('#password').type('secret_sauce');
//     cy.get('#login-button').click();
//     cy.url().should('include', '/inventory.html');
// });

// it('Invalid Login Test - Wrong Password', () => {
//     cy.get('#user-name').type('standard_user');
//     cy.get('#password').type('wrong_password');
//     cy.get('#login-button').click();
//     cy.get('[data-test="error"]').should('be.visible')
//       .and('contain', 'Epic sadface: Username and password do not match any user in this service');
// }); 
// });


import InventoryPage from '../pages/InventoryPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('Sauce Demo E2E Flow', () => {

  beforeEach(() => {
    cy.fixture('users').then((data) => {
      cy.login(data.standardUser.username, data.standardUser.password);
    });
  });

  it('should complete a full checkout flow', () => {
    InventoryPage.addProductToCart('Sauce Labs Backpack');
    InventoryPage.openCart();
    cy.contains('Sauce Labs Backpack').should('be.visible');
    
    CheckoutPage.clickCheckout();
    CheckoutPage.fillCheckoutInfo('Luisa', 'Shikuku', '00100');
    CheckoutPage.finishCheckout();
    CheckoutPage.verifySuccessMessage();
  });
});