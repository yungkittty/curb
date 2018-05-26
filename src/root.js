import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";
import App from "./app";
import i18n from "./services/internationalisation/i18n";
import theme from "./configurations/theme/index";

class Root extends Component {
  render() {
    return (
      <ThemeProvider theme={Root.getTheme()}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </ThemeProvider>
    );
  }
}

export default Root;
