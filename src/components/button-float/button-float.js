import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Circle from "../circle";
import Button from "../button-container";
import Icon from "../icon";
import { platformBools } from "../../configurations/platform";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 4

const ButtonFloat = ({
  // eslint-disable-line
  diameter,
  component,
  size,
  theme,
  style,
  ...others
}) => (
  <Circle
    {...others}
    as={Button}
    diameter={diameter}
    backgroundColor={theme.primaryColor}
    component={!others.children ? component : undefined}
    size={!others.children ? size : undefined}
    color={!others.children ? theme.secondaryVariantColor : undefined}
    style={{
      ...style,
      position: "absolute",
      zIndex: 4,
      ...(platformBools.isWeb
        ? {
            boxShadow: "0px 2.4px 2.16px 0px rgba(0, 0, 0, 0.186)"
          }
        : {}),
      ...(platformBools.isNative
        ? {
            ...(platformBools.isAndroid
              ? {
                  elevation: 4
                }
              : {
                  shadowOffset: { width: 0, height: 2.4 },
                  shadowRadius: 2.16,
                  shadowColor: "rgba(0, 0, 0, 1)",
                  shadowOpacity: 0.186
                })
          }
        : {})
    }}
  />
);

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
  diameter: PropTypes.oneOf(["extra-small", "small", "medium", "large", "extra-large", "extra-extra-large"]),
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large", "extra-large"]),
  theme: PropTypes.object.isRequired, // eslint-disable-line
  style: PropTypes.object // eslint-disable-line
};

export default withTheme(ButtonFloat);
