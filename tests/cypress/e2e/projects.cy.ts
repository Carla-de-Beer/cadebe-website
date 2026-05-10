import { ProjectsPage } from '../pages/ProjectsPage';

describe('Project Page', () => {
  it('should render projects page', () => {
    ProjectsPage.visit();
    cy.get('[data-cy="projects-banner"]').should('be.visible');
  });

  it('should display the page header', () => {
    ProjectsPage.visit();
    cy.get('[data-cy="projects-banner"]').contains('PROJECTS').should('be.visible');
  });

  it('should display the footer', () => {
    ProjectsPage.visit();
    cy.get('[data-cy="footer"]').should('be.visible');
  });
});
