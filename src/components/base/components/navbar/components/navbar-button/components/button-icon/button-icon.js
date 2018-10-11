import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../../../../../general/icon";

const color = "#dedede";
const size = 32;

const ButtonIcon = ({ icon }) => <Icon icon={icon} color={color} size={size} />;

ButtonIcon.defaultProps = {
  icon: undefined
};

ButtonIcon.propTypes = {
  icon: PropTypes.string
};

export default ButtonIcon;
