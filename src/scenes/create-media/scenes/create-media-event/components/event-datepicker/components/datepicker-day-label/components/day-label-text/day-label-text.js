import React from "react";
import PropTypes from "prop-types";
import Text from "../../../../../../../../../../components/text";

const DayLabelText = ({ color, index, ...others }) => (
  <Text {...others} style={{ flex: 1, textAlign: "center", color }} />
);

DayLabelText.propTypes = {
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default DayLabelText;
