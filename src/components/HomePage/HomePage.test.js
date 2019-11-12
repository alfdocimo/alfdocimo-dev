import React from "react";

import HomePage from "./HomePage";
import { renderWithRedux } from "../../utils/testing";
import { getSelectTest } from "../../selectors";

jest.mock("../../selectors", () => ({
  getSelectTest: jest.fn()
}));
jest.mock("./style.less", () => ({
  HomePage: "HomePage"
}));
jest.mock("../../components/Content/Fullpage", () =>
  // eslint-disable-next-line react/display-name
  () => <div>Main Page</div>
);

test("can render with redux with defaults", async () => {
  getSelectTest.mockReturnValue("Arepas");
  const { getByTestId, debug } = renderWithRedux(<HomePage />);
  debug();
  expect(getByTestId("footer").innerHTML).toBe("Arepas");
});
