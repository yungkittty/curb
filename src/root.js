import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./app";
import configureStore from "./configurations/store";
import configureI18n from "./configurations/internationalisation";
import configureTheme from "./configurations/theme";

configureI18n();
const store = configureStore();
const theme = configureTheme();

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

export default Root;
