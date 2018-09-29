import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View } from "react-native";

const Icon = ({ icon, color, size }) => (
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

Icon.defaultProps = {
  icon: undefined
};

Icon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default Icon;
