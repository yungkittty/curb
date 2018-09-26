import React from "react";
import PropTypes from "prop-types";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View } from "react-native";
import IconType from "./type";

const Icon = ({ icon, color, size }) => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <FontAwesome5 name={icon} color={color} size={size} solid />
  </View>
);

Icon.propTypes = {
  icon: PropTypes.oneOf(IconType).isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default Icon;
