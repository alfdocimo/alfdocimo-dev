import React from "react";

import HomePage from "../HomePage";
import { renderWithRedux } from "../../../utils/testing";
import {
  getSelectLanding,
  getSelectAbout,
  getSelectMenu
} from "../../../selectors";

import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import initialState from "../../../reducers/initialState";

import { mapSectionToSideMenu } from "../../../utils";

const {
  vm: {
    pages: { landing, about },
    menu
  }
} = initialState;

jest.mock("../../../selectors", () => ({
  getSelectLanding: jest.fn(),
  getSelectAbout: jest.fn(),
  getSelectMenu: jest.fn()
}));

jest.mock("../style.less", () => ({
  HomePage: "HomePage"
}));

const scrollIntoViewSpy = jest.fn();

describe("[HomePage Component]", () => {
  beforeEach(() => {
    // https://github.com/jsdom/jsdom/issues/1695
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewSpy;

    getSelectLanding.mockReturnValue(landing);
    getSelectAbout.mockReturnValue(about);
    getSelectMenu.mockReturnValue(menu);
  });

  describe("[Landing Section]", () => {
    test("can render with redux with defaults", () => {
      const { getByText } = renderWithRedux(<HomePage />);

      expect(getByText("Alfredo Narváez Docimo")).toBeInTheDocument();

      expect(getByText("Software Engineer")).toBeInTheDocument();

      expect(getByText("Who is Alfredo?")).toBeInTheDocument();

      expect(getByText("A dude who likes arepas!")).toBeInTheDocument();
    });

    describe("[Scroll Actions]", () => {
      menu.forEach(({ section }) => {
        test(`Its able to scroll to section when clicking on [${section}] Section`, () => {
          const { getByTestId } = renderWithRedux(<HomePage />);
          fireEvent.click(getByTestId(mapSectionToSideMenu(section)));
          expect(scrollIntoViewSpy).toHaveBeenCalledWith({
            behavior: "smooth",
            block: "end"
          });
        });
      });

      test("Its able to scroll to section when clicking on [More about me] Button", () => {
        const { getByText } = renderWithRedux(<HomePage />);
        fireEvent.click(getByText("More about me!"));
        expect(scrollIntoViewSpy).toHaveBeenCalledWith({
          behavior: "smooth",
          block: "end"
        });
      });
    });
  });
});
