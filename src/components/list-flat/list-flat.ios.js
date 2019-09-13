import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";

const ListFlat = props => <FlatList {...props} />;

ListFlat.defaultProps = { bounces: false };

ListFlat.propTypes = { bounces: PropTypes.bool };

export default ListFlat;
