
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  describe('Entrar a home', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.login()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
    
    })
})

describe('Entrar resources', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.login()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.contains('a', 'Resources').click()
        cy.wait(5000)
    })
})

describe('Salir resources', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.login()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.contains('a', 'Resources').click()
        cy.wait(5000)
        cy.get('.py-2').click()
        cy.wait(5000)
    })
})

describe('Regresar a Home', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.login()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.get('a > .h-20').click()
        cy.wait(5000)
    
    
    })
})

describe('Comprobar enlace de user profile', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.login()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.url().should('eq', 'http://localhost:3000/user/profile')
    
    
    })
})

describe('Comprobar link de resources', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.login()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.contains('a', 'Resources').click()
        cy.wait(5000)
        cy.url().should('eq', 'http://localhost:3000/resources')

    })
})

describe('cookie test', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.login()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.contains('a', 'cookie test').click()
        cy.wait(5000)
    })
})

describe('buttom logout', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.login()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.get('.bg-bluefigma4').click()
        cy.wait(5000)
    })
})

describe('link logout', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.login()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.get('.bg-bluefigma4').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
})
describe('brainWave Home', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.login()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.get('a > .h-20').click()
        cy.wait(5000)
        cy.url().should('eq', 'http://localhost:3000/')
    })
})

describe('brainWave Home', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.login()
        cy.visit('http://localhost:3000');
        
        cy.get('[href="#AboutSection"]').click()
        cy.wait(5000)
        
    })
})
export {}