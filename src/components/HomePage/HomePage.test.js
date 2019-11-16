import React from "react";

import HomePage from "./HomePage";
import { renderWithRedux } from "../../utils/testing";
import {
  getSelectLanding,
  getSelectAbout,
  getSelectMenu
} from "../../selectors";

jest.mock("../../selectors", () => ({
  getSelectLanding: jest.fn(),
  getSelectAbout: jest.fn(),
  getSelectMenu: jest.fn()
}));

jest.mock("./style.less", () => ({
  HomePage: "HomePage"
}));

test("can render with redux with defaults", async () => {
  getSelectLanding.mockReturnValue({
    title: "Alfredo Narváez Docimo",
    subtitle: "Software Engineer"
  });
  getSelectAbout.mockReturnValue({ test: "test" });
  getSelectMenu.mockReturnValue([
    { key: "1", section: "Home", sticker: "smile" },
    { key: "2", section: "About Me", sticker: "user" }
  ]);
  const { getByText } = renderWithRedux(<HomePage />);
  expect(getByText("About Me")).toMatchInlineSnapshot(`
  <span>
    About Me
  </span>
`);
});
