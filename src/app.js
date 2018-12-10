import React /* , { Fragment }  */ from "react";
import AppContainer from "./components/app-container";
import AppNavigation from "./components/app-navigation";
import Router from "./components/router";
// import ModalSwitch from "./components/modal-switch";
// import ModalRoute from "./components/modal-route";
// import Route from "./components/route";
// import User from "./scenes/user";
// import SignIn from "./scenes/sign-in";
// import SignUp from "./scenes/sign-up";

const App = () => (
  <Router>
    <AppContainer>
      <AppNavigation />
    </AppContainer>
  </Router>
);

export default App;
