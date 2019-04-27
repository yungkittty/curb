import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../button-container";

const Button = ({
  // eslint-disable-line
  as,
  className,
  style,
  onClick,
  children,
  contentStyle,
  component,
  ...others
}) => (
  <ButtonContainer
    // eslint-disable-line
    as={as}
    className={className}
    style={style}
    onClick={onClick}
  >
    {component // eslint-disable-line
      ? React.createElement(component, { ...others, style: contentStyle }, children)
      : children}
  </ButtonContainer>
);

Button.defaultProps = {
  as: undefined,
  className: undefined,
  style: undefined,
  onClick: undefined,
  children: undefined,
  contentStyle: undefined,
  component: undefined
};

Button.propTypes = {
  as: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  children: PropTypes.node,
  contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  component: PropTypes.func
};

export default Button;
