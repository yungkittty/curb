import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";
import App from "./app";
import theme from "./configurations/theme/index";

class Root extends Component {
  static getTheme() {
    return theme;
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ThemeProvider theme={Root.getTheme()}>
        <I18nextProvider i18n={{}}>
          <App />
        </I18nextProvider>
      </ThemeProvider>
    );
  }
}

export default Root;
