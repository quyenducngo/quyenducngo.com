describe('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit('https://www.quyenducngo.com/')
  })
  it('Contains correct header text', () => {
    cy.get('title').should('contain.text', 'Quyen Ngo');
    cy.getDataTest('fundamentals-header').contains(/Quyen Duc Ngo/i)
    cy.get('[data-test="fundamentals-header"]').contains(/Quyen Duc Ngo/i)
    // cy.get('[data-test="name-header"]').should('contain.text', 'Quyen Duc Ngo')
    cy.get('h1').should('contain.text', 'Quyen Duc Ngo');
    cy.get('[data-test="socials-heading"]').should('contain.text', 'Socials');
    cy.get('[data-test="about-me-heading"]').should('contain.text', 'About Me');
  })
})