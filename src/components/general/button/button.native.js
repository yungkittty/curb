import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../../link";
import { TouchableHighlight } from "react-native";

const button = ({ style, children, to }) => (
  <Link style={style} to={to}>
    {children}
  </Link>
);

button.defaultProps = {
  to: "/",
  onClick: undefined
};

button.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func
};

const Button = styled(button)``;

export default Button;
