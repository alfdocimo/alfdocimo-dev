import React from "react";

import About from "../About";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../style.less", () => ({
  About: "About"
}));

describe("[About Component]", () => {
  test("can render with with default props", () => {
    const { getByText } = render(
      <About id="test-id" title="test-title" content="test-content" />
    );

    expect(getByText("test-title")).toHaveTextContent("test-title");
    expect(getByText("test-content")).toHaveTextContent("test-content");
  });
});
