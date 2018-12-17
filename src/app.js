import React, { Fragment } from "react";
import AppContainer from "./components/app-container";
// import AppNavigation from "./components/app-navigation";
import Router from "./components/router";
import ModalSwitch from "./components/modal-switch";
import ModalRoute from "./components/modal-route";
import Route from "./components/route";
import Discovery from "./scenes/discovery";
import User from "./scenes/user";
import SignIn from "./scenes/sign-in";
import SignUp from "./scenes/sign-up";

const App = () => (
  <Router>
    <Fragment>
      <AppContainer>
        {/* <AppNavigation /> */}
        <ModalSwitch>
          <Route path="/" component={Discovery} />
          <Route path="/users/:id" component={User} />
          <Route />
        </ModalSwitch>
      </AppContainer>
      <ModalRoute path="/sign-in" component={SignIn} />
      <ModalRoute path="/sign-up" component={SignUp} />
    </Fragment>
  </Router>
);

export default App;
