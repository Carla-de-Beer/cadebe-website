import { SkillsPage } from '../pages/SkillsPage';

describe('Skills Page', () => {
  it('should render skills page', () => {
    cy.viewport(1280, 720);
    SkillsPage.visit();
    cy.get('[data-cy="skills-banner-desktop"]').should('be.visible');
    cy.get('[data-cy="skills-banner-mobile"]').should('not.exist');
  });
});
