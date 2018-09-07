import React from "react";
import ButtonContainer from "./components/button-container";
import ButtonIcon from "./components/button-icon";

// Here, handle as many icon-type as possible with generic Icon object

const NavbarButton = ({ icon }) => (
  <ButtonContainer>
    <ButtonIcon icon={icon} />
  </ButtonContainer>
);

export default NavbarButton;
