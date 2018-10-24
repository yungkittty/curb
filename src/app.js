import React, { Fragment } from "react";
import AppContainer from "./components/app-container";
import BaseContainer from "./components/base/components/base-container";
import Navbar from "./components/base/components/navbar";
import AppNavigation from "./components/app-navigation";
import Router from "./components/router";
import ModalSwitch from "./components/modal-switch";
import ModalRoute from "./components/modal-route";
import Route from "./components/route";
import User from "./scenes/user";
import SignIn from "./scenes/sign-in";
import SignUp from "./scenes/sign-up";

const App = () => (
  <Router>
    <AppContainer>
      <BaseContainer id="app">
        <Navbar />
        <AppNavigation />
        <ModalSwitch>
          <Route exact path="/" />
          <Route path="/users/:id" component={User} />
          <Route />
        </ModalSwitch>
      </BaseContainer>
      <ModalRoute
        path="/sign-(in|up)"
        render={() => (
          <Fragment>
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
          </Fragment>
        )}
      />
    </AppContainer>
  </Router>
);

export default App;
