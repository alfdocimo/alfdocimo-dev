import { combineReducers } from "redux";
// import fuelSavings from './fuelSavingsReducer';
import { connectRouter } from "connected-react-router";
import globalReducer from "./globalReducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    // fuelSavings, // example code
    globalReducer,
  });

export default rootReducer;
