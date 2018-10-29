import React from "react";
import ButtonContainer from "./components/button-container";
import Icon from "../icon";

const color = "#dedede";

const FloattingButton = ({ icon, onClick }) => (
  <ButtonContainer onClick={onClick}>
    <Icon icon={icon} color={color} />
  </ButtonContainer>
);

export default FloattingButton;
