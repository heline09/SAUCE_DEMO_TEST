// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// custom command to login
Cypress.Commands.add('login', (username, password) => {
    // Get username and password 
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    // Login 
    cy.get('#login-button').click()
})

// custom command to add product to cart by name
Cypress.Commands.add('addProductToCart', (productName) => {
    cy.get('.inventory_item').each(($el) => { //loops through each product
        if ($el.text().includes(productName)) { 
            cy.wrap($el).find('button').click()
        }
    })
})