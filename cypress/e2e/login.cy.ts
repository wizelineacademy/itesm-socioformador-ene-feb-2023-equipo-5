Cypress.on("uncaught:exception", () => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

  describe('login', () => {
    it('should successfully log into our app', () => {
      
      cy.visit('/')
      
      // Login on Auth0.
      cy.get('input#username').type("A01731549@tec.mx")
      cy.get('input#password').type("Panchito2!", { log: false })
      cy.contains('button[value=default]', 'Continue').click()
      cy.visit("http://localhost:3000/speechTesting")
  /*cy.origin(
    
    Cypress.env('auth0_domain'),
    { args: { username, password } },
    ({ username, password }) => {
    }
  )*/
    });
  });


  /*
  describe('Auth0', () => {
    beforeEach(function () {
      //cy.task('db:seed')
      //cy.intercept('POST', '/graphql').as('createBankAccount')
      cy.loginToAuth0(
        "A01731549@tec.mx",
        "Panchito2!"
      )
      cy.visit('http://localhost:3000/examn')
    })

    it('shows onboarding', function () {
      cy.contains('Get Started').should('be.visible')
    })
  })


/*
  describe('login', () => {
    it('should successfully log into our app', () => {
      cy.login().then((resp) => {
        const { access_token } = resp.body;
        const authHeader = `Bearer ${access_token}`;
  
        cy.visit("http://localhost:3000/examn", {
          headers: {
            Authorization: authHeader,
          },
        });
      });
    });
  });


  describe('login', () => {
    it('should successfully log into our app', () => {
        cy.visit("http://localhost:3000/");
      cy.login()
        .then((resp) => {
          console.log("-------------------------------- RESPESTA- ----------------------------")
          console.log(resp)
            return resp.body;
        })
        .then((body) => {
          const {access_token, expires_in, id_token} = body;
          const access_token_helper = access_token
          const auth0State = {
            nonce: '',
            state: 'some-random-state'
          };
          //const callbackUrl = `http://localhost:3000/auth/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
          const callbackUrl = `http://localhost:3000/auth/callback`
          cy.visit(callbackUrl)
          cy.visit(callbackUrl, {
            onBeforeLoad(win) {
              console.log(auth0State)
                win.document.cookie = 'prueba=' + JSON.stringify(access_token).slice(1, 0).slice(0, -1);
                console.log(JSON.stringify(access_token))
              //win.document.cookie = 'SmartSpeak=' + access_token_helper;
            }
          });
          cy.getCookies()
            .then((cookies) => {
              expect(cookies[0]).to.have.property('name', 'SmartSpeak')
            })
          cy.visit("http://localhost:3000/examn");
        })
    });
  });


function loginViaAuth0Ui(username: string, password: string) {
  // App landing page redirects to Auth0.
  cy.visit('/')

  // Login on Auth0.
  cy.origin(
    Cypress.env('auth0_domain'),
    { args: { username, password } },
    ({ username, password }) => {
      cy.get('input#username').type(username)
      cy.get('input#password').type(password, { log: false })
      cy.contains('button[value=default]', 'Continue').click()
    }
  )

  // Ensure Auth0 has redirected us back to the RWA.
  cy.url().should('equal', 'http://localhost:3000/')
}



  describe("Login", () => {
    it("should login successfully and redirect to instructions page with email authentication", () => {
      
        cy.visit("http://localhost:3000/login");
        //cy.login();
/*
        
        cy.contains("Log In").click();
        //cy.url().should("include", "/login");
    
        cy.contains("Log In").click();
      //cy.url().should("include", "smartspeak.us.auth0.com/u/login");
      
      //cy.contains("Continue with Google").click();
      
     cy.contains("Log in").click();
     
      cy.origin("smartspeak.us.auth0.com", () => {
        cy.get('input[name="username"]')
          .type("A01731549@tec.mx{enter}");
    
          cy.get('input[name="password"]')
          .type("Panchito2!");

          cy.contains("Continue").click();

          cy.wait(5000); // Wait for authentication to complete
        })
  

      /*
      cy.get('input[type="text"]')
  
      cy.get('input[type="password"]').type("Panchito2!");
      cy.contains("Log in").click();

  
 
 
 cy.origin("http://localhost:3000", () => {
     
})
cy.visit("http://localhost:3000/exam");
cy.url().should("include", "/exam");

    });
  });
  */