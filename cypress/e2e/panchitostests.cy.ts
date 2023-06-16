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
      cy.wait(3000)
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


//Test 5: Panchito
describe('Information from user profile loading correctly', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/")
    cy.login()
    cy.visit("http://localhost:3000/")
    cy.wait(500)
    cy.contains('button', 'Home').click()
    cy.wait(5000)
    cy.contains("Grammar");
    cy.contains("Vocabulary");
    cy.contains("Coherence");
    cy.contains("Average");
    cy.contains("Tests");
    cy.contains("Recommendations");
    cy.contains("Resources");
    cy.contains("Take test");
  })
});

//Test 6: Panchito
describe('Logout button working', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/")
    cy.login()
    cy.visit("http://localhost:3000/")
    cy.wait(500)
    cy.contains('button', 'Home').click()
    cy.wait(5000)
    cy.contains("Logout").click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})

//Test 7: Panchito
describe('Testing text for the instructions', () => {
  it('passes', () => {
    cy.login()
    cy.visit("http://localhost:3000/instructions")
    cy.wait(500)
    cy.contains("INSTRUCTIONS")
    cy.contains("The test consists of a real-time conversation, so you should click on the blue button to start and stop recording for your responses to be processed. The following points are considered for the results:")
    cy.contains("Begin Test")
  })
});

//Test 8: Panchito
describe('Testing the functionality of "Begin test" button', () => {
  it('passes', () => {
    cy.login()
    cy.visit("http://localhost:3000/instructions")
    cy.wait(500)
    cy.contains("Begin Test").click()
    cy.wait(2000)
    cy.url().should('eq', 'http://localhost:3000/exam')
  })
})

//Test 9: Panchito
describe('Not logged user cant access a profile', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/")
    cy.visit("http://localhost:3000/user/profile")
    cy.url().should('not.eq', 'http://localhost:3000/user/profile')
  })
})

//Test 10: Panchito
describe('Not logged user redirect to login when accessing a profile', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/")
    cy.visit("http://localhost:3000/user/profile")
    cy.url().should('eq', 'http://localhost:3000/login')
  })
})

//Test 11: Panchito E2E
describe('E2E: Admin log in and watch a user video', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000/")
    cy.loginAdmin()
    cy.visit("http://localhost:3000/")
    cy.wait(500)
    cy.contains('button', 'Home').click()
    cy.wait(5000)
    cy.contains("Videos").click()
    cy.contains("Detaills").click()
    cy.wait(5000)
    cy.url().should('contain', '/admin/results/')
  })
}) 

export {}