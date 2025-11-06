/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage"
import InventoryPage from '../pages/InventoryPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('End to end Purchase Flow', () => {

  before(function () {
    // Load the data externally using fixtures
    cy.fixture('users').then((data) => {
      this.data = data
    })
  })
  it('should allow multiple users to purchase multiple products', function () {

    const productName = this.data.productData;

    // Visit login page
    LoginPage.visit()

    // Login using fixture data
    LoginPage.login(this.data.validUser.username, this.data.validUser.password)

    // Inventory Page actions      
    InventoryPage.pageValidation()
    InventoryPage.getProductCards()
    InventoryPage.selectProduct(productName)
    InventoryPage.addToCart()
    InventoryPage.goToCart()
    InventoryPage.productValidation()


    // Checkout
    CheckoutPage.clickCheckout()
    CheckoutPage.checkoutValidation()
    CheckoutPage.fillCheckoutInfo(this.data.checkoutDetails.firstName, this.data.checkoutDetails.lastName, this.data.checkoutDetails.postalCode)
    CheckoutPage.verifyCheckoutOverview()
    CheckoutPage.finishCheckout()
    // Verify order completion
    CheckoutPage.verifySuccessMessage()


    // Log out for next user
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('include', '/')
  });
});

