import React from "react";
import PropTypes from "prop-types";
import Text from "../../../../../../../../../../components/text";

const MonthText = ({ color, ...others }) => <Text {...others} type="h6" style={{ color }} />;

MonthText.propTypes = {
  color: PropTypes.string.isRequired
};

export default MonthText;
