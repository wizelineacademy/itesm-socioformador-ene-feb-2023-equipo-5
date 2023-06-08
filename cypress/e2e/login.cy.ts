//This tests are from panchito



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

//Test 1: Panchito
describe('Login from main page', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/');
      cy.contains("Log In").click();
      cy.contains("Log in")
      cy.url().should('eq', 'http://localhost:3000/login')
    })
  })

//Test 2: Panchito
describe('Style loading correctly for index', () => {
it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.contains("Log In").should('have.class', 'flex flex-row mt-9 mx-10 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded');
})
})

//Test 3: Panchito
describe('Login page loads correctly', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/login');
        cy.contains("Welcome!");
        cy.contains("SmartSpeak");
        cy.contains("Log in");
})
})

//Test 4: Panchito
describe('Log in classes load correctly', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/login');
        cy.contains("Log in").should('have.class', 'mt-10 px-20 py-4 border-2 border-stone-200 rounded-lg shadow bg-bluefigma5');
})
})

