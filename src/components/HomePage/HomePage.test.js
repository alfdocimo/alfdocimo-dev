import React from "react";

import HomePage from "./HomePage";
import { renderWithRedux } from "../../utils/testing";
import {
  getSelectLanding,
  getSelectAbout,
  getSelectMenu
} from "../../selectors";

import { fireEvent } from "@testing-library/react";

jest.mock("../../selectors", () => ({
  getSelectLanding: jest.fn(),
  getSelectAbout: jest.fn(),
  getSelectMenu: jest.fn()
}));

jest.mock("./style.less", () => ({
  HomePage: "HomePage"
}));

test("can render with redux with defaults", async () => {
  const scrollIntoViewSpy = jest.fn();

  // https://github.com/jsdom/jsdom/issues/1695
  window.HTMLElement.prototype.scrollIntoView = scrollIntoViewSpy;

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

  fireEvent.click(getByText("Home"));
  expect(scrollIntoViewSpy).toHaveBeenCalledWith({
    behavior: "smooth",
    block: "end"
  });
});
