import { combineReducers } from "redux";
// import fuelSavings from './fuelSavingsReducer';
import { connectRouter } from "connected-react-router";
import homePageReducer from "./homePageReducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    // fuelSavings, // example code
    homePageReducer
  });

export default rootReducer;
