// Tests de Cypress de Adrián Faz

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  // Prueba #1: La sección de valores está presente en la página de inicio.
  describe('Values Section in Home Page', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000/');
      cy.contains("About Us").click();
      cy.wait(3000)
      cy.contains("OUR VALUES")
    })
  })

  // Prueba #2: Página de instrucciones carga correctamente y se incluyen los 4 aspectos a evaluar.
  describe('Instructions load correctly and include aspects to evaluate', () => {
    it('passes', () => {
      cy.visit("http://localhost:3000/")
      cy.login()
      cy.wait(3000)
      cy.visit("http://localhost:3000/instructions")
      cy.contains("INSTRUCTIONS")
      cy.contains("Grammar")
      cy.contains("Speaking")
      cy.contains("Comprehension")
      cy.contains("Technical Language")
    })
  })

  // Prueba #3: Botón de perfil redirecciona al URL de perfil.
  describe('User button loads profile page.', () => {
    it('passes', () => {
      cy.visit("http://localhost:3000/")
      cy.login()
      cy.wait(3000)
      cy.visit("http://localhost:3000/instructions")
      cy.contains("cookie test").click()
      cy.wait(3000)
      cy.url().should('eq', 'http://localhost:3000/user/profile')
    })
  })


  // Prueba #4: Página de inicio de examen carga correctamente con el botón de "Begin Test"
  describe('Exam Page loads correctly with Begin Test button.', () => {
    it('passes', () => {
      cy.visit("http://localhost:3000/")
      cy.login()
      cy.wait(3000)
      cy.visit("http://localhost:3000/instructions")
      cy.contains("Begin Test").click()
      cy.wait(4000)
      cy.url().should('eq', 'http://localhost:3000/exam')
    })
  })

   // Prueba #5: Si un usuario no tiene ningún examen registrado, no le aparecen recomendaciones.
   describe('No recommendations for user that has no exams.', () => {
    it('passes', () => {
      cy.visit("http://localhost:3000/")
      cy.login()
      cy.wait(3000)
      cy.visit("http://localhost:3000/user/profile")
      cy.wait(3000)
      cy.contains("You haven't taken any exams yet. Please take a test to have recommendations.")
    })
  })


 // Prueba #6: El Dashboard de admin se carga correctamente.
  describe('Dashboard admin loads correctly.  ', () => {
    it('passes', () => {
      cy.visit("http://localhost:3000/")
      cy.loginAdmin()
      cy.wait(3000)
      cy.visit("http://localhost:3000/admin/dash/videos")
      cy.wait(3000)
    })
  })

  // Prueba #7: Usuario no puede ingresar a instrucciones sin registrarse.
  describe('User can not take test without logging in.', () => {
    it('passes', () => {
      cy.visit("http://localhost:3000/")
      cy.wait(3000)
      cy.visit("http://localhost:3000/Instructions")
      cy.wait(3000)
      cy.url().should('eq', 'http://localhost:3000/login')
    })
  })


  // Prueba #8: Carga de la descripción de indicaciones en la página de recursos.
  describe('Instructions of resources page are loaded correctly', () => {
    it('passes', () => {
      cy.visit("http://localhost:3000/")
      cy.login()
      cy.wait(3000)
      cy.visit("http://localhost:3000/resources")
      cy.wait(3000)
      cy.contains("Explore a selection of videos that can help you improve your English.")  
    })
  })
 
    // Prueba #9: Después de un logout, el usuario ya no puede ingresar a hacer Test.
    describe('After logging out, user can not take test.', () => {
        it('passes', () => {
          cy.visit("http://localhost:3000/")
          cy.login()
          cy.wait(3000)
          cy.visit("http://localhost:3000/user/profile")
          cy.wait(3000)
          cy.contains("Logout").click()
          cy.wait(3000)
          cy.visit("http://localhost:3000/user/profile")
          cy.wait(3000)
          cy.url().should('eq', 'http://localhost:3000/login')
        })
      })

    // Prueba #10: Si se loggea un usuario que no ha hecho examenes, le muestra un mensaje de que no hay examenes disponibles aún.
    describe('Message mentioning that there are no existing tests if the user does not have any.', () => {
        it('passes', () => {
          cy.visit("http://localhost:3000/")
          cy.login()
          cy.wait(3000)
          cy.visit("http://localhost:3000/user/profile")
          cy.wait(3000)
          cy.contains("There are no tests yet.")

        })
      })


      // Prueba End to End: Flujo de usuario (Entra a página principal, hace login y hace un examen.)

      describe('User sees main page information, logs in and takes exam.', () => {
        it('passes', () => {
          cy.visit("http://localhost:3000/")
          cy.contains('Home').click()
          cy.wait(1000)
          cy.contains('About Us').click()
          cy.wait(1000)
          cy.contains("Contact").click();
          cy.wait(1000)
          cy.contains('Home').click()
          cy.wait(1000)
          cy.login()
          cy.wait(2000)
          cy.visit("http://localhost:3000/")
          cy.contains('button', 'Home').click()
          cy.wait(2000)
          cy.visit("http://localhost:3000/user/profile")
          cy.wait(2000)
          cy.contains("Take test").click()
          cy.wait(2000)
          cy.contains("Begin Test").click()
          cy.wait(2000)
          cy.contains("Start").click()
          cy.wait(2000)
        })
      })   


 export {}