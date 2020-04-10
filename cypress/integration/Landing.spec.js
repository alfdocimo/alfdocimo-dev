/* eslint-disable no-undef */
/// <reference types="cypress" />

import { selectors } from "../../shared";
import { fbClient } from "../../firebase";

describe("E2E [Landing] Integration test", () => {
  before(() => {
    cy.visit("/");
  });

  describe("retrieves information correctly from the firestore", () => {
    let vm = {};

    before(async () => {
      vm = await fbClient.getVM();
    });

    Object.keys(selectors.pages.landing).forEach((data) => {
      it(`renders correctly [${data}] from the VM`, () => {
        cy.get(`[data-testid="${selectors.pages.landing[data]}"]`).should(
          "have.text",
          vm.pages.landing[data]
        );
      });
    });
  });
});
