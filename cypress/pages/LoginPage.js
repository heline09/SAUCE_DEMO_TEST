class LoginPage {
    visit() {
         cy.visit(Cypress.env('url'));
    }
    enterUsername(username) {
        cy.get('#user-name',).type(username)
    }
    enterPassword(password) {
        cy.get('#password',).type(password)
    }
    clickLogin() {
        cy.get('#login-button',).click()
    }
}

export default new LoginPage()
