import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

const AppContainer = styled.div``;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Router />
      </AppContainer>
    );
  }
}

export default App;
