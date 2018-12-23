import React from "react";
import PropTypes from "prop-types";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View } from "react-native";

const Icon = ({ icon, color, size }) => {
  var s = null;
  switch (size) {
    case "small":
      s = 20;
      break;
    case "medium":
      s = 28;
      break;
    case "big":
      s = 42;
      break;
    case "huge":
      s = 52;
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
      <FontAwesome5 name={icon} color={color} size={s} solid />
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
  size: PropTypes.oneOf(["small", "medium", "big", "huge"])
};

export default Icon;
