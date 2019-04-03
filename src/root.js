import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./app";
import configureI18n from "./configurations/internationalisation";
import configureStore from "./configurations/store";
import configureAxios from "./configurations/axios";
import configureTheme from "./configurations/theme";

configureI18n();
const store = configureStore();
configureAxios(store);
const theme = configureTheme();

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

export default Root;
