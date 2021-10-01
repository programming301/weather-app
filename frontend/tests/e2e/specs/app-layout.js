// https://docs.cypress.io/api/introduction/api.html

describe('App layout', () => {
  it('App should have header and footer', () => {
    cy.visit('/');
    cy.get('header').should('exist');
    cy.get('footer').should('exist');
  });
});
