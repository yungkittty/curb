import React, { Fragment } from "react";
import AppContainer from "./components/app-container";
import AppNavigation from "./components/app-navigation";
import Router from "./components/router";
import ModalSwitch from "./components/modal-switch";
import ModalRoute from "./components/modal-route";
import Route from "./components/route";
import User from "./scenes/user";
import SignIn from "./scenes/sign-in";
import SignUp1 from "./scenes/sign-up/scenes/sign-up-1";
import CreateGroup1 from "./scenes/create-group/scenes/create-group-1";

const App = () => (
  <Router>
    <Fragment>
      <AppContainer>
        <AppNavigation />
        <ModalSwitch>
          <Route exact path="/" />
          <Route path="/users/:id" component={User} />
          <Route />
        </ModalSwitch>
      </AppContainer>
      <ModalRoute path="/sign-in" component={SignIn} />
      <ModalRoute path="/sign-up" component={SignUp1} />
      <ModalRoute path="/create-group" component={CreateGroup1} />
    </Fragment>
  </Router>
);

export default App;
