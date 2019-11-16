/// <reference types="cypress" />
describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it('finds the content "type"', () => {
    cy.get('[data-testid="btn-about-me"]').should("have.text", "About Me");
  });
});
