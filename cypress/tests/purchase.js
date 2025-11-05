// import InventoryPage from '../pages/InventoryPage';
// import CheckoutPage from '../pages/CheckoutPage';

//     describe('Data-Driven Purchase Flow', () => {

//     beforeEach(() => {
//         cy.fixture('users').as('users');
//         cy.fixture('products').as('products');
//     });

//     it('should allow multiple users to purchase multiple products', function () {
//         Object.values(this.users).forEach(user => {
//         cy.login(user.username, user.password);

//         this.products.forEach(product => {
//             cy.addProductToCart(product.name);
//         });

//         InventoryPage.openCart();
//         this.products.forEach(product => {
//             cy.contains(product.name).should('be.visible');
//         });

//         CheckoutPage.checkout('John', 'Doe', '12345');
//         cy.contains('Thank you for your order!', { timeout: 10000 }).should('be.visible');

//         });
//     });
//     });
    import InventoryPage from '../pages/InventoryPage';
    import CheckoutPage from '../pages/CheckoutPage';

    describe('Data-Driven Purchase Flow', () => {

        beforeEach(() => {
            cy.fixture('users').as('users');
            cy.fixture('products').as('products');
        });

      it('should allow multiple users to purchase multiple products', function () {
  cy.wrap(Object.values(this.users)).each(user => {
    
    // Visit login page
    cy.visit('https://www.saucedemo.com/');

    // Login
    cy.login(user.username, user.password);

    // Skip locked users
    if (user.username === 'locked_out_user') {
      cy.get('[data-test="error"]').should('contain', 'locked');
      return; // skip rest of flow for this user
    }

    // Add products to cart
    cy.wrap(this.products).each(product => {
      cy.addProductToCart(product.name);
    });

    // Open cart and verify products
    InventoryPage.openCart();
    cy.wrap(this.products).each(product => {
      cy.contains('.inventory_item_name', product.name)
        .should('be.visible');
    });

    // Checkout
    CheckoutPage.checkout('John', 'Doe', '12345');

    // Verify order completion
    cy.contains('Thank you for your order!', { timeout: 10000 })
      .should('be.visible');

    // Log out for next user
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('include', '/'); // back to login page
  });
});
    });
