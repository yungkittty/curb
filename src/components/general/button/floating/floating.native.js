import React from "react";
import ButtonContainer from "./components/button-container";
import Icon from "../../icon";

const color = "#dedede";
const size = 28;

const FloattingButton = ({ icon, onClick }) => (
  <ButtonContainer onClick={onClick}>
    <Icon icon={icon} color={color} size={size} />
  </ButtonContainer>
);

export default FloattingButton;
