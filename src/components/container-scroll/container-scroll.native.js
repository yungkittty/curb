import React from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";

const ContainerScroll = ({ contentContainerStyle, ...others }) => (
  <ScrollView
    {...others}
    contentContainerStyle={[
      contentContainerStyle,
      { flexGrow: 1 }
    ]}
  />
);

ContainerScroll.defaultProps = { contentContainerStyle: undefined };

ContainerScroll.propTypes = { contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]) };

export default ContainerScroll;
