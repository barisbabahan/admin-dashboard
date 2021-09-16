import { createStore, applyMiddleware } from "redux";
import userListReducer from "./reducers/userList";
import thunk from "redux-thunk";

export const store = createStore(userListReducer, applyMiddleware(thunk));
