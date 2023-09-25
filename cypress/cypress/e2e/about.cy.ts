import { AboutPage } from '../pages/AboutPage';

describe('About Page', () => {
  it('should render about page', () => {
    AboutPage.visit();
    cy.get('[data-cy="about-banner"]').should('be.visible');
  });
});
