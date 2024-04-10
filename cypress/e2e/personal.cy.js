describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.quyenducngo.com/personal.html')
  })
  it('passes', () => {
    cy.get('h1').should('contain.text', 'Under Construction');
  })
})