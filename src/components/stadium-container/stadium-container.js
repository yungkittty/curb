import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ContainerGradient from "../container-gradient";
import { platformBools } from "../../configurations/platform";

class StadiumContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getInnerRadius = _.memoize(this.getInnerRadius);
    this.getInnerScale = _.memoize(this.getInnerScale);
  }

  // eslint-disable-next-line
  getInnerRadius(radius) {
    const innerRadius = platformBools.isWeb
      ? // eslint-disable-line
        [30, 40, 60, 80, 100, 200, 300]
      : [20, 30, 50, 60, 70, 150, 200];
    switch (radius) {
      case "extra-extra-small":
        return innerRadius[0];
      case "extra-small":
        return innerRadius[1];
      case "small":
        return innerRadius[2];
      case "medium":
        return innerRadius[3];
      case "large":
        return innerRadius[4];
      case "extra-large":
        return innerRadius[5];
      case "extra-extra-large":
        return innerRadius[6];
      default:
        return undefined;
    }
  }

  // eslint-disable-next-line
  getInnerScale(scale) {
    switch (scale) {
      case "x2":
        return 2;
      case "x4":
        return 4;
      case "x6":
        return 6;
      case "x8":
        return 8;
      default:
        return undefined;
    }
  }

  render() {
    const {
      // eslint-disable-line
      style,
      children,
      radius,
      scale,
      gradientAngle,
      gradientColors,
      backgroundColor,
      ...others
    } = this.props;
    const innerRadius = this.getInnerRadius(radius);
    const innerScale = this.getInnerScale(scale);
    return (
      <ContainerGradient
        // eslint-disable-line
        {...others}
        gradientAngle={gradientAngle || 0}
        gradientColors={gradientColors || [backgroundColor, backgroundColor]}
        style={{
          overflow: "hidden",
          ...(_.isArray(style) ? _.reduce(style, _.extend, {}) : style),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: innerRadius,
          minWidth: innerRadius * innerScale,
          minHeight: innerRadius,
          paddingLeft: innerRadius / 2,
          paddingRight: innerRadius / 2,
          borderRadius: innerRadius / 2
        }}
      >
        {typeof children === "function"
          ? // eslint-disable-line
            children(innerRadius)
          : children}
      </ContainerGradient>
    );
  }
}

StadiumContainer.defaultProps = {
  style: undefined,
  scale: "x4",
  gradientAngle: undefined,
  gradientColors: undefined,
  backgroundColor: undefined
};

StadiumContainer.propTypes = {
  style: PropTypes.oneOfType([
    // eslint-disable-line
    PropTypes.object,
    PropTypes.array
  ]),
  children: PropTypes.oneOfType([
    // eslint-disable-line
    PropTypes.node,
    PropTypes.func
  ]).isRequired,
  radius: PropTypes.oneOf([
    // eslint-disable-line
    "extra-extra-small",
    "extra-small",
    "small",
    "medium",
    "large",
    "extra-large",
    "extra-extra-large"
  ]).isRequired,
  scale: PropTypes.oneOf([
    // eslint-disable-line
    "x2",
    "x4",
    "x6",
    "x8"
  ]),
  gradientAngle: PropTypes.number,
  gradientColors: PropTypes.arrayOf(PropTypes.string),
  backgroundColor: PropTypes.string
};

export default StadiumContainer;
