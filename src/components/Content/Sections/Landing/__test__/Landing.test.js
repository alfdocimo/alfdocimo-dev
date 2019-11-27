import React from "react";

import Landing from "../Landing";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../style.less", () => ({
  Landing: "Landing"
}));

describe("[Landing Component]", () => {
  test("can render with with default props", () => {
    const { getByText } = render(
      <Landing
        id="test-id"
        title="test-title"
        subtitle="test-subtitle"
        cta="test-cta"
      />
    );

    expect(getByText("test-title")).toHaveTextContent("test-title");
    expect(getByText("test-subtitle")).toHaveTextContent("test-subtitle");
    expect(getByText("test-cta")).toHaveTextContent("test-cta");
  });
});
