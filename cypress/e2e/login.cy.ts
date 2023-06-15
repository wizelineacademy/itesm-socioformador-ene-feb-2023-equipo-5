//Test de login (no modificar ni tomarse en cuenta)

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe("Login", () => {
  it("passes", () => {
    // cy.login();      //Log in para pruebas de un usario normal
    // cy.loginAdmin()  //Log in para pruebas de un administrador
    cy.visit('localhost:3000')
  });
});

export {}