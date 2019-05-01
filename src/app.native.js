import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
import AppContainer from "./components/app-container";
import AppNavigation from "./components/app-navigation";
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

    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => SplashScreen.hide(), 2000);
  }

  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default App;
