import React from "react";
import PropTypes from "prop-types";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Icon = ({ size, icon, ...others }) => {
  const X = (() => {
    switch (size) {
      case "extra-small":
        return undefined;
      case "small":
        return 30;
      case "medium":
        return 50;
      case "large":
        return 150;
      default:
        return undefined;
    }
  })();
  return <FontAwesome5 {...others} name={icon} size={X} solid />;
};

Icon.propTypes = {
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large"]).isRequired,
  icon: PropTypes.string.isRequired
};

export default Icon;
