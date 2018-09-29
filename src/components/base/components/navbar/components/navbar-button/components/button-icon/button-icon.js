import React from "react";
import PropTypes from "prop-types";
import IconContainer from "./components/icon-container";
import Icon from "../../../../../../../general/icon";

const color = "#dedede";
const size = 32; // Or 28 if mobile

const ButtonIcon = ({ icon }) => <Icon icon={icon} color={color} size={size} />;

ButtonIcon.defaultProps = {
  icon: undefined
};

ButtonIcon.propTypes = {
  icon: PropTypes.string
};

export default ButtonIcon;
