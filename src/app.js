import React, { Fragment } from "react";
import AppContainer from "./components/app-container";
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
    <Fragment>
      <AppContainer id="app">
        <AppNavigation />
        <ModalSwitch>
          <Route exact path="/" />
          <Route path="/users/:id" component={User} />
          <Route />
        </ModalSwitch>
      </AppContainer>
      <ModalRoute
        path="/sign-(in|up)"
        render={props => (
          <Fragment>
            <Route path="/sign-in" render={() => <SignIn {...props} />} />
            <Route path="/sign-up" render={() => <SignUp {...props} />} />
          </Fragment>
        )}
      />
    </Fragment>
  </Router>
);

export default App;
