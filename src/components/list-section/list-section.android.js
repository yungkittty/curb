import React from "react";
import PropTypes from "prop-types";
import { SectionList } from "react-native";

const ListSection = props => <SectionList {...props} />;

ListSection.defaultProps = { overScrollMode: "never" };

ListSection.propTypes = { overScrollMode: PropTypes.string };

export default ListSection;
