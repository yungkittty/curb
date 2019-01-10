import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-native";
import { TouchableHighlight } from "react-native";

const Button = ({ onClick, ...others }) =>
  typeof onClick !== "function" ? (
    <Link {...others} to={onClick} />
  ) : (
    <TouchableHighlight {...others} onPress={onClick} />
  );

Button.defaultProps = { onClick: undefined };

Button.propTypes = {
  onClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
};

export default Button;
