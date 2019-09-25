import React from "react";
import PropTypes from "prop-types";
import Text from "../../../../../../../../../../components/text";

const DayLabelText = ({ color, index }) => {
  let style = { width: 14, height: 14, textAlign: "center", color };
  if (index !== 6) style = { ...style, marginRight: 5 };
  return <Text style={style} />;
};

DayLabelText.propTypes = {
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default DayLabelText;
