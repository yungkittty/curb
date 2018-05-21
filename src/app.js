import React, { Component } from "react";
import AppContainer from "./app-container";
import Routes from "./routes";

class App extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <AppContainer>
        <Routes />
      </AppContainer>
    );
  }
}

export default App;
