import React from "react";
import SettingsContainer from "./components/settings-container";
import SettingsButton from "./components/settings-button";

const NavbarSettings = ({ to }) => (
  <SettingsContainer fixed bottom>
    <SettingsButton to={to} />
  </SettingsContainer>
);

export default NavbarSettings;
