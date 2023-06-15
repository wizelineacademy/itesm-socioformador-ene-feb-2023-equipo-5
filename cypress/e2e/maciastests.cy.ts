//These tests are from Macias

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

//E2E test
// function getRandomNumber(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// describe('Register', () => {
//     it('passes', () => {
//         cy.visit('http://localhost:3000')
//         cy.get('button#login').click()
//         cy.get('button#login').click()
//         const randomNumber = getRandomNumber(1, 1000);
//         const sentArgs = { username: `prueba${randomNumber}@cypress.com`, password: 'Secretpass1!' }
//         cy.origin('https://smartspeak.us.auth0.com', { args: sentArgs }, ({ username, password }) => {
//             cy.contains("Sign up").click()
//             cy.get('input#email').type(username)
//             cy.get('input#password').type(password)
//             cy.contains('button', 'Continue').click()
//             cy.contains('button', 'Accept').click()
//         })
//     })
// })
// ESTA PRUEBA SI FUNCIONA EN LOCAL, PERO EN EL CI TRUENA

//Prueba #1
describe('Filtrado de Usuarios', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.loginAdmin()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.get('select#dificultadusers').select('A2')
    })
})

//Prueba #2
describe('Dashboard de Usuarios', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.loginAdmin()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.get('a#dashusers').click()
    })
})

//Prueba #3
describe('Informacion de un usuario', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.loginAdmin()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.contains('td', 'prueba 11 prueba').click()
    })
})

//Prueba #4
describe('Busqueda de Usuarios', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.loginAdmin()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.contains('li', 'Videos').click()
        cy.get('input#searchvideo').type('prueba 10 prueba')
    })
})

//Prueba #5
describe('Detalles del examen de un usuario', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.loginAdmin()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.contains('td', 'prueba 4 prueba').click()
        cy.wait(5000)
        cy.contains('Details').click()
    })
})

//Prueba #6
describe('Detalles del video grabado de un usuario', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.loginAdmin()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.contains('li', 'Videos').click()
        cy.get(':nth-child(1) > .underline > a').click()
    })
})

//Prueba #7
describe('Corroborar que el nivel sea el mismo de un video y del datatable de Videos', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.loginAdmin()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.contains('li', 'Videos').click()
        cy.get(':nth-child(3) > .underline > a').click()
        cy.wait(5000)
        cy.get('.text-green-600').should('have.text', 'B2')
    })
})

//Prueba #8
describe('Fecha de un examen tomado', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.loginAdmin()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.contains('td', 'prueba 4 prueba').click()
        cy.wait(5000)
        cy.get('tbody > .text-center > :nth-child(2)').should('not.have.text', 'Date')
    })
})

//Prueba #9
describe('Log out exitoso', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.loginAdmin()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.get('.bg-bluefigma4').click()
        cy.url().should('eq', 'http://localhost:3000/')      
    })
})

//Prueba #10
describe('Ir a menu y corroborar que aun estamos loggeados', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.loginAdmin()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.get('a > .h-20').click()
        cy.contains('button', 'Home').should('not.have.text', 'Log In')
    })
})

//Prueba E2E que si sirve en CI
describe('Recorrido por la pagina desde ver el video de un usuario hasta dejar de estar loggeado', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000');
        cy.loginAdmin()
        cy.visit('http://localhost:3000');
        cy.contains('button', 'Home').click()
        cy.wait(5000)
        cy.get('input#searchusers').type('Carolina Díaz Perales')
        cy.get('.text-center > :nth-child(2) > a').click()
        cy.wait(5000)
        cy.contains('Details').click()
        cy.wait(5000)
        cy.contains('a', 'Go Back').click()
        cy.wait(5000)
        cy.contains('li', 'Videos').click()
        cy.get('select#dificultadvideos').select('B2')
        cy.get('input#searchvideo').type('Carolina Díaz Perales')
        cy.get('.underline > a').click()
        cy.wait(5000)
        cy.contains('a', 'Go back').click()
        cy.get('.bg-bluefigma4').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
})


export { }