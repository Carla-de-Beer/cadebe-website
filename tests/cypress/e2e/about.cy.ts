import { AboutPage } from '../pages/AboutPage';

describe('About Page', () => {
  it('should render about page', () => {
    AboutPage.visit();
    cy.get('[data-cy="about-banner"]').should('be.visible');
  });

  it('should display the page header', () => {
    AboutPage.visit();
    cy.get('[data-cy="about-banner"]').contains('ABOUT').should('be.visible');
  });

  it('should display the footer', () => {
    AboutPage.visit();
    cy.get('[data-cy="footer"]').should('be.visible');
  });
});
