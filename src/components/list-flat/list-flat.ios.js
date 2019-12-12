import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";

const ListFlat = forwardRef((props, forwardedRef) => <FlatList {...props} ref={forwardedRef} />);

ListFlat.defaultProps = {bounces: false };

ListFlat.propTypes = { bounces: PropTypes.bool };

export default ListFlat;