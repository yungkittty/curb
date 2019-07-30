import React from "react";
import PropTypes from "prop-types";
import CircleContainer from "../circle-container";

const Circle = ({
  as,
  className,
  style,
  diameter,
  onClick,
  backgroundColor,
  disabled,
  children,
  contentStyle,
  component,
  component: Component,
  ...others
}) => (
  <CircleContainer
    as={as}
    className={className}
    style={style}
    diameter={diameter}
    onClick={onClick}
    backgroundColor={backgroundColor}
    disabled={disabled}
  >
    {component ? (
      <Component {...others} style={contentStyle}>
        {children}
      </Component>
    ) : (
      children
    )}
  </CircleContainer>
);

Circle.defaultProps = {
  as: undefined,
  className: undefined,
  style: undefined,
  onClick: undefined,
  backgroundColor: undefined,
  disabled: undefined,
  children: undefined,
  contentStyle: undefined,
  component: undefined
};

Circle.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  diameter: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default Circle;
