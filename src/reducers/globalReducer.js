/* eslint-disable no-case-declarations */
import initialState from "./initialState";
import { Types } from "../actions";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_VM:
      // eslint-disable-next-line no-console
      // why? TODO investigate no-case-declarations
      const { vm } = action;

      return { ...state, vm };

    case Types.SET_SIDE_MENU_COLLAPSED:
      const { isCollapsed } = action;

      return { ...state, isSideMenuCollapsed: isCollapsed };

    default:
      return state;
  }
}
