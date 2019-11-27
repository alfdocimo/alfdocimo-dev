import React from "react";

import SideMenu from "../SideMenu";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("[SideMenu Component]", () => {
  test("can render with with default props", () => {
    const { getByTestId } = render(
      <SideMenu
        items={[
          { key: 1, section: "test section", sticker: "smile" },
          { key: 2, section: "other test section", sticker: "smile" }
        ]}
      />
    );

    expect(getByTestId("btn-test-section")).toHaveTextContent("test section");
    expect(getByTestId("btn-other-test-section")).toHaveTextContent("other test section");
  });
});
