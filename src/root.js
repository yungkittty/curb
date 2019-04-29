import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import App from "./app-container";
import configureStore from "./configurations/store";
import configureTheme from "./configurations/theme";
import configureWithStoreAxios from "./configurations/axios";
import configureWithStoreI18n from "./configurations/internationalisation";

const { store, persistor } = configureStore();
const theme = configureTheme();

// https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate
        persistor={persistor}
        onBeforeLift={() => {
          configureWithStoreAxios(store);
          configureWithStoreI18n(store);
        }}
      >
        <App />
      </PersistGate>
    </ThemeProvider>
  </Provider>
);

export default Root;
