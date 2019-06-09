import React from "react";
import PropTypes from "prop-types";
import { SectionList } from "react-native";

const ListSection = props => <SectionList {...props} />;

ListSection.defaultProps = {
  stickySectionHeadersEnabled: false
};

ListSection.propTypes = {
  stickySectionHeadersEnabled: PropTypes.bool
};

export default ListSection;
