import React from "react";
import { withTheme } from "styled-components";
import IconContainer from "./components/icon-container";
import Icon from "../../../../../../../../../../components/icon";

const OptionIcon = ({ theme, icon, size, selected }) => (
  <IconContainer>
    <Icon
      icon={icon}
      size={size}
      color={selected === false ? theme.pimaryColor : theme.fontVariantColor}
    />
  </IconContainer>
);

export default withTheme(OptionIcon);
