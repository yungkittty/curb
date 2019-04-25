import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../button-container";

// eslint-disable-next-line
const Button = ({
  // eslint-disable-line
  className,
  style,
  contentStyle,
  onClick,
  component,
  render,
  ...others
}) => (
  <ButtonContainer className={className} style={style} onClick={onClick}>
    {/* eslint-disable-next-line */}
    {component ? (
      React.createElement(component, { ...others, style: contentStyle })
    ) : render ? (
      render({ ...others, style: contentStyle })
    ) : (
      <React.Fragment />
    )}
  </ButtonContainer>
);

Button.defaultProps = { component: undefined, render: undefined };

Button.propTypes = { component: PropTypes.func, render: PropTypes.func };

export default Button;
