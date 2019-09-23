import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../../../../../components/container";
import Button from "../../../../../../../../components/button";
import Icon from "../../../../../../../../components/icon";
import Text from "../../../../../../../../components/text";

const DatepickerMonth = ({ onPrevMonth, onNextMonth, currentDate, color }) => (
  <Container
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 25,
      width: 7 * 12 + 6 * 5
    }}
  >
    <Button onClick={onPrevMonth} style={{ position: "absolute", left: 0 }}>
      <Icon icon={"chevron-left"} size="extra-small" color={color} />
    </Button>
    <Text weight={700} type="h6" style={{ color: `${color}` }}>
      {currentDate.getMonth() + 1}
      {currentDate.getFullYear()}
    </Text>
    <Button onClick={onNextMonth} style={{ position: "absolute", right: 0 }}>
      <Icon icon={"chevron-right"} size="extra-small" color={color} />
    </Button>
  </Container>
);

DatepickerMonth.propTypes = {
  onPrevMonth: PropTypes.func.isRequired,
  onNextMonth: PropTypes.func.isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
  color: PropTypes.string.isRequired
};

export default DatepickerMonth;
