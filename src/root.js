import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
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
        <App />
      </ThemeProvider>
    );
  }
}

export default Root;
