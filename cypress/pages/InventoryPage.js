class InventoryPage {
  addProductToCart(productName) {
    cy.contains(productName).parents('.inventory_item').find('button').click()
  }

  openCart() {
    cy.get('.shopping_cart_link').click()
  }
}

export default new InventoryPage()
