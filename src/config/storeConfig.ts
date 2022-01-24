import { createStore, compose, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import initial from "../reducers/initialState";

import rootReducer from "../reducers/index";

function configureStore(initialState = initial) {
  const middlewares = [
    // Add other middleware on this line...
    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk
  ];

  const composeEnhancers =
    (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose)  as typeof compose || compose; // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept("../reducers", () => {
  //     const nextReducer = require("../reducers").default; // eslint-disable-line global-require
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}

export default configureStore;
