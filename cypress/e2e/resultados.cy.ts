Cypress.on("uncaught:exception", () => {
  // returning false here prevents Cypress from failing the test
  return false;
});

describe("Login", () => {
  it("should login successfully and redirect to instructions page with Google authentication", () => {
    cy.visit("http://192.168.1.108:3000");
    cy.contains("Log In").click();
    cy.url().should("include", "/login");

    cy.contains("Log in").click();
    cy.url().should("include", "smartspeak.us.auth0.com/u/login");

    cy.contains("Continue with Google").click();

    cy.get('input[type="email"]').type("user@example.com");
    cy.contains("Next").click();

    cy.get('input[type="password"]').type("password123");
    cy.contains("Next").click();

    cy.wait(5000); // Wait for authentication to complete
    cy.url().should("include", "/exam");
  });
});
