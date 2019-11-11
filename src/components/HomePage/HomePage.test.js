import React from "react";

import HomePage from "./HomePage";
import renderWithRedux from "../../utils/testing";
import { getSelectTest } from "../../selectors";

jest.mock("../../selectors", () => ({
  getSelectTest: jest.fn()
}));

test("can render with redux with defaults", () => {
  getSelectTest.mockReturnValue("Arepas");
  const { debug } = renderWithRedux(<HomePage />);
  debug();
});
