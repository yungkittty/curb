import React from "react";
import { isMobile } from "react-device-detect";
import AppDownload from "./components/app-download";
import AppContainer from "./components/app-container";
import AppNavigation from "./components/app-navigation";
import AppModal from "./components/app-modal";
import Router from "./components/router";
import Switch from "./components/switch";
import Route from "./components/route";
import Discovery from "./scenes/discovery";
import User from "./scenes/user";
import Group from "./scenes/group";

const App = () => (
  <Router>
    {{ isMobile } ? (
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
      </React.Fragment>
    )}
  </Router>
);

export default App;
