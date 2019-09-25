import React from "react";
import PropTypes from "prop-types";
import Button from "../../../../../../../../../components/button";
import Text from "../../../../../../../../../components/text";

const Day = ({ index, day, style, textStyle, onClick }) => (
  <Button
    style={{
      ...style,
      width: 20,
      height: 15,
      marginTop: 1,
      textAlign: "center"
    }}
    onClick={() => onClick(index)}
  >
    <Text type="h6" weight={700} style={{ ...textStyle }}>
      {day}
    </Text>
  </Button>
);

Day.propTypes = {
  index: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Day;
