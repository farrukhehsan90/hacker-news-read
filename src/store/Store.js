import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/RootReducer";
import thunk from "redux-thunk";

const preloadedState = {};

const middlewares = [thunk];

// enable if you have redux devtools extension => window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(...middlewares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
