import React from "react";
import PropTypes from "prop-types";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Icon = ({ size, icon, ...others }) => {
  const X = (() => {
    switch (size) {
      case "extra-small":
        return 15;
      case "small":
        return 30;
      case "medium":
        return 35;
      case "large":
        return 40;
      case "extra-large":
        return 100;
      case "extra-extra-large":
        return 130;
      default:
        return undefined;
    }
  })();
  return <FontAwesome5 {...others} name={icon} size={X} solid />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    // eslint-disable-line
    "extra-small",
    "small",
    "medium",
    "large",
    "extra-large",
    "extra-extra-large"
  ]).isRequired
};

export default Icon;
