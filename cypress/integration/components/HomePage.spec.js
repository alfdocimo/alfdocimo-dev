/* eslint-disable no-undef */
/// <reference types="cypress" />
describe("E2E [HomePage] Integration test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it('renders correctly data from the VM in [Landing]', () => {
    cy.get('#section-1 > h1').should("have.text", "Alfredo Narváez Docimo");
    cy.get('#section-1 > h2').should("have.text", "Full Stack JavaScript Engineer");
    cy.get('#section-1 > div > button').should("have.text", "More about me!");
  });
});
