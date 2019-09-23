import React from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";

const ContainerScroll = props => <ScrollView {...props} />;

ContainerScroll.defaultProps = { overScrollMode: "never" };

ContainerScroll.propTypes = { overScrollMode: PropTypes.string };

export default ContainerScroll;
