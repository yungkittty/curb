import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../link/root";
import { TouchableHighlight } from "react-native";

const button = ({ style, children, onClick }) =>
  typeof onClick === "object" ? (
    <Link style={style} to={onClick}>
      {children}
    </Link>
  ) : (
    <TouchableHighlight style={style} onPress={onClick}>
      {children}
    </TouchableHighlight>
  );

button.defaultProps = {
  onClick: undefined
};

button.propTypes = {
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

const Button = styled(button)``;

export default Button;
