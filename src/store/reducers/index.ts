import { combineReducers } from "redux";
import starwarsReducer from "./starwarsReduser/reduser";

export const rootReducer = combineReducers({
  starwars: starwarsReducer,
});
