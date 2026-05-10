import { NewsPage } from '../pages/NewsPage';

describe('News Page', () => {
  it('should render news page', () => {
    NewsPage.visit();
    cy.get('[data-cy="news-banner"]').should('be.visible');
  });

  it('should display the page header', () => {
    NewsPage.visit();
    cy.get('[data-cy="news-banner"]').contains('NEWS & BLOG').should('be.visible');
  });

  it('should display the footer', () => {
    NewsPage.visit();
    cy.get('[data-cy="footer"]').should('be.visible');
  });
});
