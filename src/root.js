import React from "react";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import App from "./app";
// import configureStore from "./configurations/store";
import configureI18n from "./configurations/internationalisation";
import configureTheme from "./configurations/theme";
import { configureScreen } from "./configurations/screen";

const store = null; // configureStore();
const i18n = configureI18n();
const theme = configureTheme();
configureScreen();

const Root = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </Provider>
);

export default Root;
