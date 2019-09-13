import _ from "lodash";
import React from "react";
import AppSplash from "./components/app-splash";
import AppDeep from "./components/app-deep";
import AppKeyboardAvoidingView from "./components/app-keyboard-avoiding-view";
import AppDownload from "./components/app-download";
import AppContainer from "./components/app-container";
import AppNavigation from "./components/app-navigation";
import AppModal from "./components/app-modal";
import AppAlert from "./components/app-alert";
import Router from "./components/router";
import Switch from "./components/switch";
import Route from "./components/route";
import Redirect from "./components/redirect";
import Discovery from "./scenes/discovery";
import User from "./scenes/user";
import Group from "./scenes/group";
import { platformBools } from "./configurations/platform";

const App = () => {
  const { isWeb, isMobile } = platformBools;
  return (
    <Router>
      {isWeb && isMobile ? (
        <AppDownload />
      ) : (
        <React.Fragment>
          <AppDeep />
          <AppContainer>
            <AppNavigation />
            <Switch>
              <Route exact path="/" component={Discovery} />
              <Route path="/users/:id" component={User} />
              <Route path="/groups/:id" component={Group} />
              <Redirect to="/" />
            </Switch>
          </AppContainer>
          <AppModal />
          <AppAlert />
        </React.Fragment>
      )}
    </Router>
  );
};

export default _.flowRight([
  // eslint-disable-line
  AppSplash,
  AppKeyboardAvoidingView
])(App);
