import { combineReducers } from "redux";
import activePageReducer from "./activePage";
import userListReducer from "./userList";

const allReducers = combineReducers({
  userList: userListReducer,
  activePage: activePageReducer,
});

export default allReducers;
