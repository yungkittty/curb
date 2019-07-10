import _ from "lodash";
import React from "react";
import { isMobile } from "react-device-detect";
import AppDeep from "./components/app-deep";
import AppSplash from "./components/app-splash";
import AppKeyboardAvoidingView from "./components/app-keyboard-avoiding-view";
import AppDownload from "./components/app-download";
import AppContainer from "./components/app-container";
import AppNavigation from "./components/app-navigation";
import AppModal from "./components/app-modal";
import AppAlert from "./components/app-alert";
import Router from "./components/router";
import Switch from "./components/switch";
import Route from "./components/route";
import Discovery from "./scenes/discovery";
import User from "./scenes/user";
import Group from "./scenes/group";

const App = () => (
  <Router>
    {isMobile ? (
      <AppDownload />
    ) : (
      <React.Fragment>
        <AppContainer>
          <AppNavigation />
          <Switch>
            <Route exact path="/" component={Discovery} />
            <Route path="/users/:id" component={User} />
            <Route path="/groups/:id" component={Group} />
            <Route />
          </Switch>
        </AppContainer>
        <AppModal />
        <AppAlert />
      </React.Fragment>
    )}
  </Router>
);

export default _.flow(
  AppDeep,
  AppSplash,
  AppKeyboardAvoidingView
)(App);
