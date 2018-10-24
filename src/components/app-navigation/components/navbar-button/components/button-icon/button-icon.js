import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../../../general/icon";

const color = "#dedede";

const ButtonIcon = ({ icon }) => <Icon icon={icon} color={color} />;

ButtonIcon.defaultProps = {
  icon: undefined
};

ButtonIcon.propTypes = {
  icon: PropTypes.string
};

export default ButtonIcon;
