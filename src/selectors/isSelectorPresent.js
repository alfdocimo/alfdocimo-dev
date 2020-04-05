// TODO
// Should be replaced with proposal-throw-expressions for throw new Error();

export default (stateSelector) =>
  // eslint-disable-next-line no-console
  stateSelector || console.warn("Selector in state not present");
