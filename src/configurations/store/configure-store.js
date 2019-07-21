import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { enableBatching } from "redux-batched-actions";
import configureSaga from "./configure-saga";
import configurePersist from "./configure-persist";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

// https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f
// https://github.com/rt2zz/redux-persist#basic-usage

const configureStore = () => {
  const sagaMiddleware = configureSaga();
  const middlewares = [sagaMiddleware];
  const persistedReducer = enableBatching(persistReducer(configurePersist(), rootReducer));
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));
  const persistedStore = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor: persistedStore };
};

export default configureStore;
