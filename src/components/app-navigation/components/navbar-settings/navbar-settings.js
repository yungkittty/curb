import React from "react";
import SettingsContainer from "./components/settings-container";
import SettingsButton from "./components/settings-button";

const NavbarSettings = () => (
  <SettingsContainer fixed bottom>
    <SettingsButton />
  </SettingsContainer>
);

export default NavbarSettings;
