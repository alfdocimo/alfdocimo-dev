import React from "react";

import Landing from "../Landing";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Route } from "react-router-dom";

jest.mock("../style.less", () => ({
  Landing: "Landing",
}));

let getByText;
let _location;

describe("[Landing Component]", () => {
  beforeEach(() => {
    ({ getByText } = render(
      <MemoryRouter>
        <Route
          path="*"
          render={({ location }) => {
            _location = location;
            return null;
          }}
        />
        <Landing
          id="test-id"
          title="test-title"
          subtitle="test-subtitle"
          cta="test-cta"
        />
      </MemoryRouter>
    ));
  });

  test("can render with with default props", () => {
    expect(getByText("test-title")).toBeInTheDocument();
    expect(getByText("test-subtitle")).toBeInTheDocument();
    expect(getByText("test-cta")).toBeInTheDocument();
    expect(_location.pathname).toBe("/");
  });

  test("should be able to go to [about-me] page when clicking the cta button", () => {
    fireEvent.click(getByText("test-cta"));
    expect(_location.pathname).toBe("/about-me");
  });
});
