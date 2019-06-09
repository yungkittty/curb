import React from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";

const ContainerScroll = props => <ScrollView {...props} />;

ContainerScroll.defaultProps = {
  bounces: false
};

ContainerScroll.propTypes = {
  bounces: PropTypes.bool
};

export default ContainerScroll;
