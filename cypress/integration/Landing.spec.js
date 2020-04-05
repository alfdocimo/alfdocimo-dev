/* eslint-disable no-undef */
/// <reference types="cypress" />

import { selectors } from "../../shared";

const landingData = {
  title: "Alfredo Narváez Docimo",
  subtitle: "Full Stack JavaScript Engineer",
  cta: "More about me!",
};

describe("E2E [Landing] Integration test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("retrieves information correctly from the firestore", () => {
    Object.keys(landingData).forEach((data) => {
      it(`renders correctly [${data}] from the VM`, () => {
        cy.get(`[data-testid="${selectors.pages.landing[data]}"]`).should(
          "have.text",
          landingData[data]
        );
      });
    });

    it("should be able to click the [More about me] button and go to [/about-me] page", () => {
      cy.get(`[data-testid="${selectors.pages.landing.cta}"]`).click();
    });
  });
});
