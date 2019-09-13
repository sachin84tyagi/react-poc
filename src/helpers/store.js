import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import { createLogger } from "redux-logger";

const middleware = [thunk, createLogger()];

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
  )
);
/* eslint-enable */

export default store;
