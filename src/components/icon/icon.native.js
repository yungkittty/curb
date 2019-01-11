import React from "react";
import PropTypes from "prop-types";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Icon = ({ icon, size, ...others }) => {
  const X = (() => {
    switch (size) {
      case "small":
        return 15;
      case "medium":
        return 30;
      case "large":
        return 60;
      default:
        return undefined;
    }
  })();
  return <FontAwesome5 {...others} name={icon} size={X} solid />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired
};

export default Icon;
