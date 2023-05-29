
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
      login(): Chainable<any>;
      loginToAuth0(username: string, password: string): Chainable<any>;
    }
}

Cypress.Commands.add('login', (overrides = {}) => {
    Cypress.log({
      name: 'loginViaAuth0',
    });
    /*
    username: Cypress.env('auth_username'),
    password: Cypress.env('auth_password'),
    audience: Cypress.env('auth_audience'),
    scope: 'openid profile email',
    client_id: Cypress.env('auth_client_id'),
    client_secret: Cypress.env('auth_client_secret'),
    */
  
    const options = {
      method: 'POST',
      url: 'https://smartspeak.us.auth0.com/oauth/token',
      body: {
        username: 'A01731549@tec.mx',
        password: 'Panchito2!',
        grant_type: 'password',
        client_id: 'rOEiyLGS99KKMGmSFGsLolIlHq4W7Caz',
        client_secret: 'f4lkiMGILn93Vb00S0cKh85mdljLrn_850QtJQwe_JQS-AetccvS-lnaV_0dbiqb',
        audience: 'https://smartspeak.us.auth0.com/api/v2/',    
        scope: 'openid profile email',
      },
    };
    cy.request(options).then(({ body }) => {
      //@ts-ignore
      import jwt from "jsonwebtoken"
      const claims = jwt.decode(body.id_token)
      const {nickname, name, picture, updated_at, email, email_verified, sub, exp} = claims
      const auth0Token = {
        body: {
          ...body,
          decodedToken: {
            claims,
            audience: 'https://smartspeak.us.auth0.com/api/v2/',
            client_id: 'rOEiyLGS99KKMGmSFGsLolIlHq4W7Caz',
            user: {
              nickname,
              name,
              picture,
              updated_at,
              email,
              email_verified,
              sub
            }
          }
        },
        expiresAt: exp
      }
      window.localStorage.setItem('SmartSpeak', JSON.stringify(auth0Token));
    })
  });


  function loginViaAuth0Ui(username: string, password: string) {
    // App landing page redirects to Auth0.
    cy.visit('http://localhost:3000/login')
    cy.contains("Log in").click();
    cy.contains("Log in").click();
  
    // Login on Auth0.
    cy.origin(
      "smartspeak.us.auth0.com",
      { args: { username, password } },
      ({ username, password }) => {
        cy.get('input#username').type(username)
        cy.get('input#password').type(password, { log: false })
        cy.contains('button[value=default]', 'Continue').click()
      }
    )
  
    // Ensure Auth0 has redirected us back to the RWA.
    cy.url().should('equal', 'http://localhost:3000/Instructions')
  }
  
Cypress.Commands.add('loginToAuth0', (username: string, password: string) => {
  const log = Cypress.log({
    displayName: 'AUTH0 LOGIN',
    message: [`🔐 Authenticating | ${username}`],
    // @ts-ignore
    autoEnd: false,
  })
  log.snapshot('before')

  loginViaAuth0Ui(username, password)

  log.snapshot('after')
  log.end()
})