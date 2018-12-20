import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight } from "react-native";

const Button = ({ onClick, ...others }) => (
  <TouchableHighlight {...others} onPress={onClick} />
);

Button.defaultProps = { onClick: undefined };

Button.propTypes = { onClick: PropTypes.func };

export default Button;
