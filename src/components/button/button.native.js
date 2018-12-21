<<<<<<< HEAD
import { TouchableHighlight as Button } from "react-native";
=======
import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight } from "react-native";

const Button = ({ onClick, ...others }) => (
  <TouchableHighlight {...others} onPress={onClick} />
);

Button.defaultProps = { onClick: undefined };

Button.propTypes = { onClick: PropTypes.func };
>>>>>>> c6916fa5c8ecb1c8cf35fe4fc568e1793fe12c66

export default Button;
