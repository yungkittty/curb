import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Circle from "../circle";
import Button from "../button-container";
import Icon from "../icon";
import { platformBools } from "../../configurations/platform";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 4

const ButtonIconFloat = ({
  // eslint-disable-line
  diameter,
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
    component={Icon}
    size={size}
    color={theme.secondaryVariantColor}
    style={{
      ...style,
      position: "absolute",
      zIndex: 4,
      ...(platformBools.isReact
        ? {
            right: 30,
            bottom: 30,
            boxShadow: "0px 2.4px 2.16px 0px rgba(0, 0, 0, 0.186)"
          }
        : {}),
      ...(platformBools.isReactNative
        ? {
            right: 15,
            bottom: 15,
            ...(platformBools.isAndroid
              ? {
                  elevation: 4
                }
              : {
                  shadowOffset: { width: 0, height: 2.4 },
                  shadowRadius: 2.16,
                  shadowColor: "rgba(0, 0, 0, 0.186)",
                  shadowOpacity: 1
                })
          }
        : {})
    }}
  />
);

ButtonIconFloat.defaultProps = {
  diameter: "medium",
  size: "small"
};

ButtonIconFloat.propTypes = {
  diameter: PropTypes.oneOf(["extra-small", "small", "medium", "large"]),
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large"]),
  theme: PropTypes.object.isRequired, // eslint-disable-line
  style: PropTypes.object // eslint-disable-line
};

export default withTheme(ButtonIconFloat);
