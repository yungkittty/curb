import React, { Component } from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import AppDownload from "./components/app-download";
import AppContainer from "./components/app-container";
import AppNavigation from "./components/app-navigation";
import AppLoading from "./components/app-loading";
import AppModal from "./components/app-modal";
import Router from "./components/router";
import Switch from "./components/switch";
import Route from "./components/route";
import Discovery from "./scenes/discovery";
import User from "./scenes/user";
import Group from "./scenes/group";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { showAppLoading: process.env.NODE_ENV === "production" };
  }

  render() {
    const { showAppLoading } = this.state;
    const { isAppLoaded } = this.props;
    return (
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
            {showAppLoading && (
              <AppLoading
                isAppLoaded={isAppLoaded}
                onTransitionEnd={() => this.setState({ showAppLoading: false })}
              />
            )}
          </React.Fragment>
        )}
      </Router>
    );
  }
}

App.propTypes = {
  isAppLoaded: PropTypes.bool.isRequired
};

export default App;
