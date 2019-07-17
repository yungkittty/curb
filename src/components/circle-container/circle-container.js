import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Container from "../container";
import { platformBools } from "../../configurations/platform";

const CircleContainer = ({
  // eslint-disable-line
  diameter,
  style,
  backgroundColor,
  children,
  ...others
}) => {
  const innerDiameter = (() => {
    const innerDiameters = platformBools.isWeb
      ? // eslint-disable-line
        [40, 60, 80, 100, 200, 300] // 320
      : [40, 50, 60, 70, 150, 200]; // 150
    switch (diameter) {
      case "extra-small":
        return innerDiameters[0];
      case "small":
        return innerDiameters[1];
      case "medium":
        return innerDiameters[2];
      case "large":
        return innerDiameters[3];
      case "extra-large":
        return innerDiameters[4];
      case "extra-extra-large":
        return innerDiameters[5];
      default:
        return undefined;
    }
  })();
  return (
    <Container
      {...others}
      style={{
        ...(_.isArray(style) ? _.reduce(style, _.extend, {}) : style),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: innerDiameter,
        minWidth: innerDiameter,
        height: innerDiameter,
        minHeight: innerDiameter,
        borderRadius: innerDiameter / 2,
        ...(backgroundColor ? { backgroundColor } : {})
      }}
    >
      {typeof children === "function" ? children(innerDiameter) : children}
    </Container>
  );
};

CircleContainer.defaultProps = {
  children: undefined,
  style: [],
  backgroundColor: undefined
};

CircleContainer.propTypes = {
  diameter: PropTypes.oneOf([
    // eslint-disable-line
    "extra-small",
    "small",
    "medium",
    "large",
    "extra-large",
    "extra-extra-large"
  ]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};

export default CircleContainer;
