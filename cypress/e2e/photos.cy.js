describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.quyenducngo.com/photos.html')
    cy.get('h1').should('contain.text', 'Under Construction');
  })
})