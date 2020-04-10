import React from "react";

import Page from "../Page";

import "@testing-library/jest-dom/extend-expect";
import { renderWithRedux } from "../../../utils/testing";
import initialState from "../../../reducers/initialState";
import { getIsSideMenuCollapsed, getSelectMenu } from "../../../selectors";
import { MemoryRouter, Route } from "react-router-dom";
import { Landing, About } from "../../Content/";

jest.mock("../../../selectors", () => ({
  getIsSideMenuCollapsed: jest.fn(),
  getSelectMenu: jest.fn(),
}));

let _location, getByText;

const renderPageWithComponent = (component) =>
  renderWithRedux(
    <MemoryRouter>
      <Route
        path="*"
        render={({ location }) => {
          _location = location;
          return null;
        }}
      />

      <Page>{component}</Page>
    </MemoryRouter>
  );

describe("[Page Component]", () => {
  beforeEach(() => {
    getSelectMenu.mockReturnValueOnce(initialState.vm.menu);
    getIsSideMenuCollapsed.mockReturnValueOnce(
      initialState.isSideMenuCollapsed
    );

    ({ getByText } = renderPageWithComponent(<div>child here</div>));
  });

  test("can render with with default props", () => {
    expect(getByText("child here")).toBeInTheDocument();
    expect(_location.pathname).toBe("/");
  });

  test("can render with [About section]", () => {
    ({ getByText } = renderPageWithComponent(
      <About {...initialState.vm.pages.about} />
    ));

    expect(getByText(initialState.vm.pages.about.title)).toBeInTheDocument();
    expect(getByText(initialState.vm.pages.about.content)).toBeInTheDocument();
  });

  test("can render with [Landing section]", () => {
    ({ getByText } = renderPageWithComponent(
      <Landing {...initialState.vm.pages.landing} />
    ));

    expect(getByText(initialState.vm.pages.landing.title)).toBeInTheDocument();
  });
});
