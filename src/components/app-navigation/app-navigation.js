import React from "react";

import NavbarContainer from "./components/navbar-container";
import NavbarAccount from "./components/navbar-account";
import NavbarSettings from "./components/navbar-settings";

const AppNavigation = () => (
  <NavbarContainer>
    <NavbarAccount />

    <NavbarSettings />
  </NavbarContainer>
);

export default AppNavigation;
