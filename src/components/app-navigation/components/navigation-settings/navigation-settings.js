import React from "react";
import SettingsContainer from "./components/settings-container";
import NavigationButton from "../navigation-button";
import NavigationBar from "../navigation-bar";

const NavigationSettings = () => (
  <SettingsContainer>
    <NavigationBar />
    <NavigationButton icon="cog" />
  </SettingsContainer>
);

export default NavigationSettings;
