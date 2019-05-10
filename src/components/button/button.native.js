import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-native";
import { TouchableOpacity } from "react-native";

const Button = ({ children, onClick, ...others }) =>
  typeof onClick === "string" || onClick === "object" ? (
    <Link {...others} to={onClick}>
      {React.Children.only(children)}
    </Link>
  ) : (
    <TouchableOpacity {...others} onPress={onClick}>
      {React.Children.only(children)}
    </TouchableOpacity>
  );

Button.defaultProps = { onClick: undefined };

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
};

export default Button;
