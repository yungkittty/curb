import React from "react";
import PropTypes from "prop-types";
import CircleContainer from "../circle-container";

const Circle = ({
  as,
  className,
  style,
  diameter,
  backgroundColor,
  onClick,
  children,
  contentStyle,
  component,
  ...others
}) => (
  <CircleContainer
    as={as}
    className={className}
    style={style}
    diameter={diameter}
    backgroundColor={backgroundColor}
    onClick={onClick}
  >
    {component // eslint-disable-line
      ? React.createElement(component, { ...others, style: contentStyle }, children)
      : children}
  </CircleContainer>
);

Circle.defaultProps = {
  as: undefined,
  className: undefined,
  style: undefined,
  backgroundColor: undefined,
  onClick: undefined,
  children: undefined,
  contentStyle: undefined,
  component: undefined
};

Circle.propTypes = {
  as: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  diameter: PropTypes.oneOf(["extra-small", "small", "medium", "large"]).isRequired,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  children: PropTypes.node,
  contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  component: PropTypes.func
};

export default Circle;
