import React from "react";
import PropTypes from "prop-types";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Icon = ({ size, ...others }) => {
  const X = (() => {
    switch (size) {
      case "small":
        return 15;
      case "medium":
        return 30;
      default:
        return undefined;
    }
  })();
  return <FontAwesome5 {...others} size={X} solid />;
};

Icon.propTypes = { size: PropTypes.oneOf(["small", "medium"]).isRequired };

export default Icon;
