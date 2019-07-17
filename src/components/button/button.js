import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../button-container";

const Button = ({
  // eslint-disable-line
  as,
  className,
  style,
  onClick,
  hoverColor,
  disabled,
  children,
  contentStyle,
  component,
  component: Component,
  ...others
}) => (
  <ButtonContainer
    // eslint-disable-line
    as={as}
    className={className}
    style={style}
    onClick={onClick}
    hoverColor={hoverColor}
    disabled={disabled}
  >
    {component ? (
      <Component {...others} style={contentStyle}>
        {children}
      </Component>
    ) : (
      children
    )}
  </ButtonContainer>
);

Button.defaultProps = {
  as: undefined,
  className: undefined,
  style: undefined,
  onClick: undefined,
  hoverColor: undefined,
  disabled: undefined,
  children: undefined,
  contentStyle: undefined,
  component: undefined
};

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  hoverColor: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default Button;
