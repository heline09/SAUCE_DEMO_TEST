class CheckoutPage {
  clickCheckout() {
    cy.get('#checkout').click()
  }
  checkoutValidation() {
    cy.contains('Checkout: Your Information').should('be.visible')
  }
  fillCheckoutInfo(firstName, lastName, postalCode) {
    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#postal-code').type(postalCode)
    cy.get('#continue').click()
  }
  verifyCheckoutOverview() {
    cy.contains('Checkout: Overview').should('be.visible')
  }
  finishCheckout() {
    cy.get('#finish').click()
  }

  verifySuccessMessage() {
    cy.contains('Thank you for your order!').should('be.visible')
  }

}


export default new CheckoutPage()
