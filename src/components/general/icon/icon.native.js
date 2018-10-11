import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View } from "react-native";

const Icon = ({ icon, color, size }) => {
  var s = null;
  switch (size) {
    case "small":
      s = 22;
      break;
    case "medium":
      s = 28;
      break;
    case "big":
      s = 42;
      break;
    default:
      s = null;
  }
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1
      }}
    >
      {FontAwesome.hasIcon(icon) ? (
        <FontAwesome5 name={icon} color={color} size={size} solid />
      ) : null}
    </View>
  );
};

Icon.defaultProps = {
  icon: undefined,
  size: "medium"
};

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.oneOf(["small", "medium", "big"])
};

export default Icon;
