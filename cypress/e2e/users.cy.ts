//These tests are from Macias

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

// describe('Register', () => {
//     it('passes', () => {
//         cy.visit('http://localhost:3000')
//         cy.get('button#login').click()
//         cy.get('button#login').click()
//         const sentArgs = { username: 'prueba39@cypress.com', password: 'Secretpass1!' }
//         cy.origin('https://smartspeak.us.auth0.com', { args: sentArgs }, ({ username, password }) => {
//             cy.contains("Sign up").click()
//             cy.get('input#email').type(username)
//             cy.get('input#password').type(password)
//             cy.contains('button', 'Continue').click()
//             cy.contains('button', 'Accept').click()
//         })
//         cy.visit('localhost:3000')
//     })
// })

describe('LoginGoogle', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000')
        cy.get('button#login').click()
        cy.get('button#login').click()
        // const sentArgs = { username: 'prueba39@cypress.com', password: 'Secretpass1!' }
        cy.origin('https://smartspeak.us.auth0.com', () => {
            cy.contains("Continue with Google").click()
        })
    })
})

// describe('Login', () => {
//     it('passes', () => {
//         cy.visit('http://localhost:3000')
//         cy.contains("Log In").click()
//         cy.contains("Log in").click()
//         const sentArgs = { username: 'prueba28@cypress.com', password: 'Secretpass1!' }
//         cy.origin('https://smartspeak.us.auth0.com', { args: sentArgs }, ({ username, password }) => {
//             cy.get('input#username').type(username)
//             cy.get('input#password').type(password)
//             cy.contains('button', 'Continue').click({ force: true })
//             cy.getCookie('SmartSpeak')

//         })

//     })
// })


