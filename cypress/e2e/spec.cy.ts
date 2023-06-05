describe('Prueba 1', () => {
  it('Homepage has Vision, Mision and Values', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Vision')
    cy.contains('Mision')
    cy.contains('VALUES')
  })
})