import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Circle from "../circle";
import Button from "../button-container";
import Icon from "../icon";
import { platformBools } from "../../configurations/platform";
import withShadow from "../../hocs/with-shadow";

// https://react-native.canny.io/feature-requests/p/shadow-does-not-appear-if-overflow-hidden-is-set-on-ios

const ButtonFloat = ({
  // eslint-disable-line
  style,
  diameter,
  component,
  size,
  theme,
  ...others
}) => {
  const floatPosition = "absolute";
  const floatOverflow = "visible";
  return (
    <Circle
      {...others}
      as={Button}
      diameter={diameter}
      backgroundColor={theme.primaryColor}
      component={!others.children ? component : undefined}
      size={!others.children ? size : undefined}
      color={!others.children ? theme.secondaryVariantColor : undefined}
      style={{
        ...(_.isArray(style) ? _.reduce(style, _.extend, {}) : style),
        position: floatPosition,
        overflow: floatOverflow
      }}
    />
  );
};

ButtonFloat.defaultProps = {
  diameter: "medium",
  component: Icon,
  size: "small",
  style: platformBools.isWeb
    ? // eslint-disable-line
      { right: 30, bottom: 30 }
    : { right: 15, bottom: 15 }
};

ButtonFloat.propTypes = {
  diameter: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  size: PropTypes.string,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  style: PropTypes.object // eslint-disable-line
};

export default _.flowRight([
  // eslint-disable-line
  withShadow(4),
  withTheme
])(ButtonFloat);
