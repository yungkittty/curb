import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import App from "./app";
import theme from "./configurations/theme/";

class Root extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  }
}

export default Root;
