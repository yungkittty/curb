import React from "react";
import PropTypes from "prop-types";
import IconContainer from "./components/icon-container";
import Icon from "../../../../../../../general/icon";
import IconType from "../../../../../../../general/icon/type";

const ButtonIcon = ({ icon }) => (
  <IconContainer>
    <Icon icon={icon} />
  </IconContainer>
);

ButtonIcon.propTypes = {
  icon: PropTypes.oneOf(IconType).isRequired
};

export default ButtonIcon;
