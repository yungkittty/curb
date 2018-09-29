import React from "react";
import SettingsContainer from "./components/settings-container";
import SettingsButton from "./components/settings-button";

const NavbarSettings = ({ onClick }) => (
  <SettingsContainer fixed bottom>
    <SettingsButton onClick={onClick} />
  </SettingsContainer>
);

export default NavbarSettings;
