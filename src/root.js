import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./app";
import configureAxios from "./configurations/axios";
import configureI18n from "./configurations/internationalisation";
import configureStore from "./configurations/store";
import configureTheme from "./configurations/theme";

configureAxios();
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
