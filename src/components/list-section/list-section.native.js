import React from "react";
import PropTypes from "prop-types";
import { SectionList } from "react-native";

const ListSection = props => <SectionList {...props} />;

ListSection.defaultProps = {
  bounces: false,
  stickySectionHeadersEnabled: false
};

ListSection.propTypes = {
  bounces: PropTypes.bool,
  stickySectionHeadersEnabled: PropTypes.bool
};

export default ListSection;
