// TODO
// Should be replaced with proposal-throw-expressions for throw new Error();

export default stateSelector =>
  stateSelector || "Selector in state not present";
