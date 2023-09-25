import { HomePage } from '../pages/HomePage';

describe('Home Page', () => {
  it('should render home page', () => {
    HomePage.visit('/');
    cy.get('[data-cy="welcome-banner-desktop"]').should('be.visible');
    cy.get('[data-cy="welcome-banner-mobile"]').should('not.exist');
  });
});
