import React, { Component } from "react";
import { NativeRouter as Router } from "react-router-native";
import styled from "styled-components";

const AppContainer = styled.View``;

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
