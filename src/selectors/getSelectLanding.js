import isSelectorPresent from "./isSelectorPresent";
export default (state) =>
  isSelectorPresent(state.globalReducer.vm.pages.landing);
