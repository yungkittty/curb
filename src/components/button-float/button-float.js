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
  diameter: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  size: PropTypes.string,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  style: PropTypes.oneOf([PropTypes.object, PropTypes.array]) // eslint-disable-line
};

export default _.flowRight([
  // eslint-disable-line
  withShadow(4),
  withTheme
])(ButtonFloat);
