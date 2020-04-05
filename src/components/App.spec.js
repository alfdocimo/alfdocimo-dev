import React from "react";

import App from "../components/App";

import "@testing-library/jest-dom/extend-expect";
import { renderWithRedux } from "../utils/testing";
import mockInitialState from "../reducers/initialState";

import { MemoryRouter, Route, Switch } from "react-router-dom";

import { fireEvent, cleanup } from "@testing-library/react";

jest.mock("../selectors", () => ({
  getIsSideMenuCollapsed: jest.fn(() => mockInitialState.isSideMenuCollapsed),
  getSelectMenu: jest.fn(() => mockInitialState.vm.menu),
  getSelectAbout: jest.fn(() => mockInitialState.vm.pages.about),
  getSelectLanding: jest.fn(() => mockInitialState.vm.pages.landing),
}));

let _location, getByText, debug;

const renderAppInRoute = (route) =>
  renderWithRedux(
    <MemoryRouter initialEntries={[route]}>
      <Switch>
        <Route
          path={route}
          render={({ location }) => {
            _location = location;
            return null;
          }}
        />
      </Switch>

      <App />
    </MemoryRouter>
  );

describe("[App]", () => {
  afterEach(cleanup);

  describe("App [Landing] section", () => {
    beforeEach(() => ({ getByText } = renderAppInRoute("/")));

    Object.values(mockInitialState.vm.pages.landing).forEach((text) => {
      test(`renders correctly the text ${text} for the [Landing] section`, () => {
        expect(getByText(text)).toBeInTheDocument();
      });
    });

    test("App goes to [/about-me] when clicking on [more about me] button", () => {
      fireEvent.click(getByText(mockInitialState.vm.pages.landing.cta));
      expect(_location.pathname).toBe("/about-me");
      expect(
        getByText(mockInitialState.vm.pages.about.title)
      ).toBeInTheDocument();
    });
  });

  describe("App [About Me] section", () => {
    beforeEach(() => ({ getByText } = renderAppInRoute("/about-me")));
    Object.values(mockInitialState.vm.pages.about).forEach((text) => {
      test(`renders correctly the text ${text} for the [About Me] section`, () => {
        expect(getByText(text)).toBeInTheDocument();
      });
    });
  });

  describe("App [Side Menu] section", () => {
    beforeEach(() => ({ debug } = renderAppInRoute("/")));
    Object.values(mockInitialState.vm.menu).forEach(({ section, uri }) => {
      test(`renders correctly the text ${section} for the [Side Menu] section`, () => {
        expect(getByText(section)).toBeInTheDocument();
      });
      test(`its able to go to ${uri} when clicking on ${section}`, () => {
        fireEvent.click(getByText(section));
        expect(_location.pathname).toBe(`/${uri}`);
      });
    });
  });
});
