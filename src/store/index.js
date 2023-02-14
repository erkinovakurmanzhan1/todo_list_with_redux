import { combineReducers, createStore } from "redux";
import { registrationReducer } from "./authReducer/authReducer";
import { todoReducer } from "./todoReducer/todoReducer";

const rootReducer = combineReducers({
  registration: registrationReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer);
