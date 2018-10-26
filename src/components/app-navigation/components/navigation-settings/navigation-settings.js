import React from "react";
import SettingsContainer from "./components/settings-container";
import SettingsButton from "./components/settings-button";
import SectionBar from "../navigation-section/components/section-bar";

const NavigationSettings = () => (
  <SettingsContainer>
    <SectionBar />
    <SettingsButton />
  </SettingsContainer>
);

export default NavigationSettings;
