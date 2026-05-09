import { NewsPage } from '../pages/NewsPage';

describe('News Page', () => {
  it('should render news page', () => {
    NewsPage.visit();
    cy.get('[data-cy="news-banner"]').should('be.visible');
  });
});
