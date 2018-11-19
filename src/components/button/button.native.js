import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../link/root";
import { TouchableHighlight } from "react-native";

const button = ({ style, children, to, onClick }) =>
  to ? (
    <Link style={style} to={to}>
      {children}
    </Link>
  ) : (
    <TouchableHighlight style={style} onPress={onClick}>
      {children}
    </TouchableHighlight>
  );

button.defaultProps = {
  to: undefined,
  onClick: undefined
};

button.propTypes = {
  to: PropTypes.object,
  onClick: PropTypes.func
};

const Button = styled(button)``;

export default Button;
