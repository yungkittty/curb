import React from "react";
import NavigationContainer from "./components/navigation-container";
import NavigationUser from "./components/navigation-user";
import NavigationSettings from "./components/navigation-settings";

const AppNavigation = () => (
  <NavigationContainer>
    <NavigationUser />
    <NavigationSettings />
  </NavigationContainer>
);

export default AppNavigation;
