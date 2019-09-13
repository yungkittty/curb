import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";

const ListFlat = props => <FlatList {...props} />;

ListFlat.defaultProps = { overScrollMode: "never" };

ListFlat.propTypes = { overScrollMode: PropTypes.string };

export default ListFlat;
