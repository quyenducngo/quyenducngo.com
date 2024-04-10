describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.quyenducngo.com/photos.html')
  })
  it('passes', () => {
    cy.get('h1').should('contain.text', 'Under Construction');
  })
})