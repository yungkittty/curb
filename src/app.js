import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import AppDownload from "./components/app-download";
import AppContainer from "./components/app-container";
import AppNavigation from "./components/app-navigation";
import Router from "./components/router";
import ModalSwitch from "./components/modal-switch";
import ModalRoute from "./components/modal-route";
import Route from "./components/route";
import Redirect from "./components/redirect";
import Discovery from "./scenes/discovery";
import User from "./scenes/user";
import Group from "./scenes/group";
import SignIn from "./scenes/sign-in";
import SignUp from "./scenes/sign-up";

const App = ({ currentUserToken }) => (
  <Router>
    {isMobile ? (
      <AppDownload />
    ) : (
      <React.Fragment>
        <AppContainer>
          <AppNavigation />
          <ModalSwitch>
            <Route exact path="/" component={Discovery} />
            <Route path="/users/:id" component={User} />
            <Route path="/groups/:id" component={Group} />
            <Route />
          </ModalSwitch>
        </AppContainer>
        <Route
          path="/sign-(in|up)"
          component={props =>
            !currentUserToken ? (
              <React.Fragment>
                <ModalRoute {...props} path="/sign-in" component={SignIn} />
                <ModalRoute {...props} path="/sign-up" component={SignUp} />
              </React.Fragment>
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </React.Fragment>
    )}
  </Router>
);

App.propTypes = { currentUserToken: PropTypes.string.isRequired };

export default App;
