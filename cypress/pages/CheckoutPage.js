class CheckoutPage {
  clickCheckout() {
    cy.get('#checkout').click()
  }

  fillCheckoutInfo(firstName, lastName, postalCode) {
    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#postal-code').type(postalCode)
    cy.get('#continue').click()
  }

  finishCheckout() {
    cy.get('#finish').click()
  }

  verifySuccessMessage() {
    cy.contains('Thank you for your order').should('be.visible')
  }
}

export default new CheckoutPage()
