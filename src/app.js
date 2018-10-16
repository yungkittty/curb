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
import SignUp1 from "./scenes/sign-up-1";
import SignUp2 from "./scenes/sign-up-2";
import SignUp3 from "./scenes/sign-up-3";

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
        path="/sign-(in|up-1|up-2|up-3)"
        render={() => (
          <Fragment>
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up-1" component={SignUp1} />
            <Route path="/sign-up-2" component={SignUp2} />
            <Route path="/sign-up-3" component={SignUp3} />
          </Fragment>
        )}
      />
    </AppContainer>
  </Router>
);

export default App;
