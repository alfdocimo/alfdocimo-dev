import isSelectorPresent from "./isSelectorPresent";

export default (state) =>
  isSelectorPresent(state.globalReducer.isSideMenuCollapsed);
