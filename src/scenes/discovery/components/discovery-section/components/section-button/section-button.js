import React from "react";
import { withTheme } from "styled-components";
import ButtonContainer from "./components/button-container";
import Icon from "../../../../../../components/icon";

const SectionButton = ({ onClick, icon, theme }) => (
  <ButtonContainer onClick={onClick}>
    <Icon icon={icon} size="small" color={theme.secondaryVariantColor} />
  </ButtonContainer>
);

export default withTheme(SectionButton);
