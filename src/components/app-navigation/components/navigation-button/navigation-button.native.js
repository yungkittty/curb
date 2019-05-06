import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Circle from "../../../circle";
import Button from "../../../button";
import withAppNavigation from "../../../../hocs/with-app-navigation";

const NavigationButton = ({
  // eslint-disable-line
  style,
  hideAppNavigation,
  history,
  onClick,
  ...others
}) => (
  <Circle
    {...others}
    as={Button}
    diameter="small"
    style={[...style, { marginBottom: 10 }]}
    onClick={() => {
      hideAppNavigation();
      // eslint-disable-next-line
      onClick && _.includes(["string", "object"], typeof onClick) ? history.push(onClick) : onClick();
    }}
  />
);

NavigationButton.defaultProps = {
  style: [],
  onClick: undefined
};

NavigationButton.propTypes = {
  style: PropTypes.PropTypes.array, // eslint-disable-line
  hideAppNavigation: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func])
};

export default _.flowRight([
  // eslint-disable-line
  withAppNavigation,
  withRouter
])(NavigationButton);
