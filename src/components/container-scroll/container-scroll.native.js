import React from "react";
import PropTypes from "prop-types";
import { View, ScrollView } from "react-native";

// https://stackoverflow.com/a/45134830

const ContainerScroll = ({ contentContainerStyle, ...others }) => (
  <View style={{ flex: 1 }}>
    <ScrollView
      {...others}
      contentContainerStyle={[
        contentContainerStyle,
        { flexGrow: 1 }
      ]}
    />
  </View>
);

ContainerScroll.defaultProps = { contentContainerStyle: undefined };

ContainerScroll.propTypes = { contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]) };

export default ContainerScroll;
