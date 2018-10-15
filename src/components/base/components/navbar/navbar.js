import React from "react";
import NavbarContainer from "./components/navbar-container";
import NavbarAccount from "./components/navbar-account";
import NavbarSettings from "./components/navbar-settings";

const Navbar = () => (
  <NavbarContainer>
    <NavbarAccount to="/sign-in" />

    <NavbarSettings to="/sign-up" />
  </NavbarContainer>
);

export default Navbar;
