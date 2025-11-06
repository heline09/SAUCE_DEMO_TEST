/// <reference types="cypress" />
class LoginPage {
    // Navigate to the login page
    visit() {
        cy.visit(Cypress.env('url'))
    }

    // login to the page
    login(username, password) {
        cy.login(username, password)
    }
}

export default new LoginPage;