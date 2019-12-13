import React from "react";
import PropTypes from "prop-types";
import Text from "../../../../../../../text";

const DayLabelText = ({ color, index, ...others }) => {
  let style = { width: 20, height: 14, textAlign: "center", color };
  if (index !== 6) style = { ...style, marginRight: 5 };
  return <Text {...others} style={style} />;
};

DayLabelText.propTypes = {
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default DayLabelText;
