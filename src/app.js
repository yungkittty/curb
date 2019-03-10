import React from "react";
import PropTypes from "prop-types";
import AppContainer from "./components/app-container";
import AppNavigation from "./components/app-navigation";
import AppModal from "./components/app-modal";
import Router from "./components/router";
import Switch from "./components/switch";
import Route from "./components/route";
import Redirect from "./components/redirect";
import Discovery from "./scenes/discovery";
import User from "./scenes/user";
import Group from "./scenes/group";

const App = ({ currentUserToken }) => (
  <Router>
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
  </Router>
);

App.propTypes = { currentUserToken: PropTypes.string.isRequired };

export default App;
