import React from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";

const ContainerScroll = ({ contentContainerStyle, ...others }) => (
  <ScrollView
    {...others}
    contentContainerStyle={[
      // eslint-disable-line
      contentContainerStyle,
      { flex: 1 }
    ]}
  />
);

ContainerScroll.defaultProps = {
  contentContainerStyle: undefined
};

ContainerScroll.propTypes = {
  contentContainerStyle: PropTypes.object // eslint-disable-line
};

export default ContainerScroll;
