import React from "react";
import PropTypes from "prop-types";
import StadiumContainer from "../stadium-container";

const Stadium = ({
  as,
  className,
  style,
  radius,
  scale,
  onClick,
  gradientAngle,
  gradientColors,
  backgroundColor,
  disabled,
  children,
  contentStyle,
  component,
  component: Component,
  ...others
}) => (
  <StadiumContainer
    as={as}
    className={className}
    style={style}
    radius={radius}
    scale={scale}
    onClick={onClick}
    gradientAngle={gradientAngle || 0}
    gradientColors={gradientColors || [backgroundColor, backgroundColor]}
    disabled={disabled}
  >
    {component ? (
      <Component {...others} style={contentStyle}>
        {children}
      </Component>
    ) : (
      children
    )}
  </StadiumContainer>
);

Stadium.defaultProps = {
  as: undefined,
  className: undefined,
  style: undefined,
  scale: undefined,
  onClick: undefined,
  gradientAngle: undefined,
  gradientColors: undefined,
  backgroundColor: undefined,
  disabled: undefined,
  children: undefined,
  contentStyle: undefined,
  component: undefined
};

Stadium.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  radius: PropTypes.string.isRequired,
  scale: PropTypes.string,
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  gradientAngle: PropTypes.number,
  gradientColors: PropTypes.arrayOf(PropTypes.string),
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default Stadium;
