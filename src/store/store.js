import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { reducer as UserReducer } from "./reducer/userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  userState: UserReducer
})

export const store = createStore(
  rootReducer,
  compose( applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
console.log(store.getState())