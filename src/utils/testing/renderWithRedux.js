import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";

import rootReducer from "../../reducers";
import initialState from "../../reducers/initialState";

export default function renderWithRedux(
  ui,
  { store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}
