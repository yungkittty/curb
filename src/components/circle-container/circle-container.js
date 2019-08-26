import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Container from "../container";
import { platformBools } from "../../configurations/platform";

// https://react-native.canny.io/feature-requests/p/shadow-does-not-appear-if-overflow-hidden-is-set-on-ios

class CircleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getInnerDiameter = _.memoize(this.getInnerDiameter);
  }

  // eslint-disable-next-line
  getInnerDiameter(diameter) {
    const innerDiameters = platformBools.isWeb
      ? // eslint-disable-line
        [25, 30, 40, 60, 80, 100, 200, 300]
      : [20, 20, 35, 50, 60, 70, 150, 200];
    switch (diameter) {
      case "extra-extra-extra-small":
        return innerDiameters[0];
      case "extra-extra-small":
        return innerDiameters[1];
      case "extra-small":
        return innerDiameters[2];
      case "small":
        return innerDiameters[3];
      case "medium":
        return innerDiameters[4];
      case "large":
        return innerDiameters[5];
      case "extra-large":
        return innerDiameters[6];
      case "extra-extra-large":
        return innerDiameters[7];
      default:
        return undefined;
    }
  }

  render() {
    const {
      // eslint-disable-line
      style,
      children,
      diameter,
      backgroundColor,
      ...others
    } = this.props;
    const innerDiameter = this.getInnerDiameter(diameter);
    return (
      <Container
        // eslint-disable-line
        {...others}
        style={{
          overflow: "hidden",
          ...(_.isArray(style) ? _.reduce(style, _.extend, {}) : style),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: innerDiameter,
          height: innerDiameter,
          minWidth: innerDiameter,
          minHeight: innerDiameter,
          borderRadius: innerDiameter / 2,
          ...(backgroundColor ? { backgroundColor } : {})
        }}
      >
        {typeof children === "function"
          ? // eslint-disable-line
            children(innerDiameter)
          : children}
      </Container>
    );
  }
}

CircleContainer.defaultProps = {
  style: undefined,
  backgroundColor: undefined
};

CircleContainer.propTypes = {
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
  diameter: PropTypes.oneOf([
    // eslint-disable-line
    "extra-extra-extra-small",
    "extra-extra-small",
    "extra-small",
    "small",
    "medium",
    "large",
    "extra-large",
    "extra-extra-large"
  ]).isRequired,
  backgroundColor: PropTypes.string
};

export default CircleContainer;
