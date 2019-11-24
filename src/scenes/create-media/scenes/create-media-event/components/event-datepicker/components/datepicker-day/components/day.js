import React from "react";
import PropTypes from "prop-types";
import Button from "../../../../../../../../../components/button";
import Text from "../../../../../../../../../components/text";

const Day = ({ day, style, textStyle, onClick }) => (
  <Button
    style={{
      ...style,
      width: 20,
      height: 15,
      marginTop: 1,
      textAlign: "center"
    }}
    onClick={() => onClick(day)}
  >
    <Text type="h6" weight={700} style={{ ...textStyle }}>
      {day.getDate()}
    </Text>
  </Button>
);

Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Day;
