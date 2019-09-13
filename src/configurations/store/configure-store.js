import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import configurePersist from "./configure-persist";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

// https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f
// https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
// https://github.com/rt2zz/redux-persist#basic-usage

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const persistedReducer = persistReducer(configurePersist(), rootReducer);
  const composerEnhancers = composeWithDevTools({ trace: true });
  const store = createStore(persistedReducer, composerEnhancers(applyMiddleware(...middlewares)));
  const persistedStore = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor: persistedStore };
};

export default configureStore;
