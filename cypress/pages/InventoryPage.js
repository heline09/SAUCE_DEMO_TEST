/// <reference types="cypress" /> 

class InventoryPage {
  // validate that we're on the correct page
  pageValidation() {
    cy.contains("Swag Labs").should('be.visible')
  }

  // Get all product cards
  getProductCards() {
    return cy.get('.inventory_list')   
  }
  // Add the first product in the list to the cart
  selectProduct(productName)
   {
    cy.addProductToCart(productName)
   }
   addToCart(){
    cy.get('.inventory_item').first().find('button').click()
   }
   productValidation(){
    cy.get('.cart_item').should('have.length', 1)
   }  
   // Navigate to cart/checkout page
  goToCart() {
    cy.get('.shopping_cart_link').click();
     }
}

export default new InventoryPage();
