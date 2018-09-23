import React from "react";
import AppContainer from "./components/app-container";
import BaseContainer from "./components/base/components/base-container";
import Navbar from "./components/base/components/navbar";
import Main from "./components/base/components/main";
import Popup from "./components/popup/popup";

const App = () => (
  <AppContainer>
    <BaseContainer id="base">
      <Navbar />
      <Main />
    </BaseContainer>
    <Popup />
  </AppContainer>
);

export default App;
