import { HomePage } from '../pages/HomePage';

describe('Home Page', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('should render home page', () => {
    HomePage.visit();
    cy.get('[data-cy="welcome-banner-desktop"]').should('be.visible');
    cy.get('[data-cy="welcome-banner-mobile"]').should('not.exist');
  });
});
