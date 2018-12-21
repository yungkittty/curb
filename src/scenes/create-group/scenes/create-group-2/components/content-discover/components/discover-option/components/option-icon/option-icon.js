import React from "react";
import IconContainer from "./components/icon-container";
import Icon from "../../../../../../../../../../components/icon";

const OptionIcon = ({ icon, size, color }) => (
  <IconContainer>
    <Icon icon={icon} size={size} color={color} />
  </IconContainer>
);

export default OptionIcon;
