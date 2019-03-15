import { createStore, applyMiddleware } from "redux";
import { createOffline } from "@redux-offline/redux-offline";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"; // eslint-disable-line
import createSagaMiddleware from "redux-saga";
import configureOffline from "./configure-offline";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

// https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f
// https://github.com/redux-offline/redux-offline/blob/develop/docs/recipes/redux-saga.md

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const {
    middleware: offlineMiddleware,
    enhanceReducer,
    enhanceStore
  } = createOffline(configureOffline());
  const middlewares = [sagaMiddleware, offlineMiddleware];
  const store = createStore(
    enhanceReducer(rootReducer),
    composeWithDevTools(enhanceStore, applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
