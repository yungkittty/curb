import React from "react";
import NavigationContainer from "./components/navigation-container";
import NavigationAccount from "./components/navigation-account";
import NavigationSettings from "./components/navigation-settings";

const AppNavigation = () => (
  <NavigationContainer>
    <NavigationAccount />
    <NavigationSettings />
  </NavigationContainer>
);

export default AppNavigation;
