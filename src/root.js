import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import App from "./app";

class Root extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ThemeProvider theme={{}}>
        <App />
      </ThemeProvider>
    );
  }
}

export default Root;
