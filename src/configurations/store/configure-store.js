import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

// https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f

const configureStore = () => {
  const composeEnhancers =
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
