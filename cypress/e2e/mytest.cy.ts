///E2E
Cypress.on("uncaught:exception", () => {
  return false;
});

describe("My First Test", () => {
  it("Visits the Brainwave Page", () => {
    cy.visit("http://192.168.1.108:3000");
  });
});

//Assertion LogIn
describe("Login page", () => {
  it('should redirect to login page when "Log In" button is clicked', () => {
    const baseUrl = "http://192.168.1.108:3000";
    cy.visit(baseUrl);

    cy.contains("Log In").click();

    cy.url().should("eq", `${baseUrl}/login`);
  });
});

//Negative assertion
describe("Login page", () => {
  it('should not redirect to login page when "Log In" button is clicked', () => {
    const baseUrl = "http://192.168.1.108:3000";
    cy.visit(baseUrl);

    cy.contains("Log In").click();

    cy.url().should("not.eq", `${baseUrl}/exam`);
  });
});
