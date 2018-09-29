import React from "react";
import NavbarButton from "../../../navbar-button/navbar-button";

const SettingsButton = ({ onClick }) => (
  <NavbarButton onClick={onClick} icon="cog" />
);

export default SettingsButton;
