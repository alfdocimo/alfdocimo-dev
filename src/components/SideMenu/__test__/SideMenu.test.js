import React from "react";

import SideMenu from "../SideMenu";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Route } from "react-router-dom";

describe("[SideMenu Component]", () => {
  let getByTestId;
  let _location;

  beforeEach(() => {
    ({ getByTestId } = render(
      <MemoryRouter>
        <Route
          path="*"
          render={({ location }) => {
            _location = location;
            return null;
          }}
        />
        <SideMenu
          items={[
            { key: 1, section: "test section", sticker: "smile", uri: "home" },
            {
              key: 2,
              section: "other test section",
              sticker: "smile",
              uri: "about-me",
            },
          ]}
        />
      </MemoryRouter>
    ));
  });

  test("can render with with default props", () => {
    expect(getByTestId("btn-home")).toHaveTextContent("test section");
    expect(getByTestId("btn-about-me")).toHaveTextContent("other test section");
  });

  test.each`
    btn               | path
    ${"btn-home"}     | ${"/home"}
    ${"btn-about-me"} | ${"/about-me"}
  `(
    "should be able to change the path to [$path] section when clicking on $btn",
    ({ btn, path }) => {
      fireEvent.click(getByTestId(btn));

      expect(_location.pathname).toBe(path);
    }
  );
});
