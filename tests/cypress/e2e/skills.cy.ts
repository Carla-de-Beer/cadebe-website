import { SkillsPage } from '../pages/SkillsPage';

describe('Skills Page', () => {
  it('should render skills page', () => {
    cy.viewport(1280, 720);
    SkillsPage.visit();
    cy.get('[data-cy="skills-banner-desktop"]').should('be.visible');
    cy.get('[data-cy="skills-banner-mobile"]').should('not.exist');
  });

  it('should display the page header', () => {
    cy.viewport(1280, 720);
    SkillsPage.visit();
    cy.get('[data-cy="skills-banner-desktop"]').contains('SKILLS').should('be.visible');
  });

  it('should display the footer', () => {
    cy.viewport(1280, 720);
    SkillsPage.visit();
    cy.get('[data-cy="footer"]').should('be.visible');
  });
});
