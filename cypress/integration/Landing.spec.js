/* eslint-disable no-undef */
/// <reference types="cypress" />

import { selectors } from "../../shared";
import { fbClient } from "../../firebase";

describe("E2E [Landing] Integration test", () => {
  let vm = { pages: { landing: {} } };
  before(() => {
    cy.visit("/");
  });

  describe("retrieves information correctly from the firestore", () => {
    before(async () => {
      vm = await fbClient.getVM();
    });

    Object.keys(vm.pages.landing).forEach((data) => {
      it(`renders correctly [${data}] from the VM`, () => {
        cy.get(`[data-testid="${selectors.pages.landing[data]}"]`).should(
          "have.text",
          landingData[data]
        );
      });
    });
  });

  it("should be able to click the [More about me] button and go to [/about-me] page", () => {
    cy.get(`[data-testid="${selectors.pages.landing.cta}"]`).click();
  });
});
