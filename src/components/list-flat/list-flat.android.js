import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";

const ListFlat = forwardRef((props, forwardedRef) => <FlatList {...props} ref={forwardedRef} />);

ListFlat.defaultProps = { overScrollMode: "never" };

ListFlat.propTypes = { overScrollMode: PropTypes.string };

export default ListFlat;
