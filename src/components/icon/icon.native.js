import React from "react";
import PropTypes from "prop-types";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Icon = ({ size, icon, ...others }) => {
  const X = (() => {
    switch (size) {
      case "small":
        return 20;
      case "medium":
        return 30;
      case "large":
        return 50;
      default:
        return undefined;
    }
  })();
  return <FontAwesome5 {...others} name={icon} size={X} solid />;
};

Icon.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  icon: PropTypes.string.isRequired
};

export default Icon;
