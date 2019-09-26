import React from "react";
import PropTypes from "prop-types";
import Text from "../../../../../../../../../../components/text";

const DayLabelText = ({ color, index, ...others }) => {
  let style = { width: 14, height: 14, textAlign: "center", color };
  if (index !== 6) style = { ...style, marginRight: 12 };
  return <Text {...others} style={style} />;
};

DayLabelText.propTypes = {
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default DayLabelText;
