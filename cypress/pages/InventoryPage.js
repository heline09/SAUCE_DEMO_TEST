class InventoryPage {
  addProductToCart(productName) {
    cy.contains('.inventory_item_name', productName) // scope to product name class
      .closest('.inventory_item')                     // closest container
      .within(() => {
        cy.get('button.btn_inventory')               // specifically the Add to Cart button
          .should('be.visible')                     // make sure it's visible
          .click();
      });
  }

  openCart() {
    cy.get('.shopping_cart_link').click();
  }
}

export default new InventoryPage();
