import { ProjectsPage } from '../pages/ProjectsPage';

describe('Project Page', () => {
  it('should render projects page', () => {
    ProjectsPage.visit();
    cy.get('[data-cy="projects-banner"]').should('be.visible');
  });
});
