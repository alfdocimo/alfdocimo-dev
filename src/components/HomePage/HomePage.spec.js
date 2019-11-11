/// <reference types="cypress" />
describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.visit("/");

    cy.contains("arepas");
  });
});
