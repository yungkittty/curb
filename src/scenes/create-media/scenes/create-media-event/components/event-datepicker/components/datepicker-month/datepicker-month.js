import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../../../../../components/container";
import Button from "../../../../../../../../components/button";
import Icon from "../../../../../../../../components/icon";
import Text from "../../../../../../../../components/text";

const DatepickerMonth = ({ onPrevMonth, onNextMonth, currentDate, color }) => (
  <Container style={{ display: "flex", flexDirection: "row", height: 100, width: "100%" }}>
    <Button onClick={onPrevMonth}>
      <Icon icon={"chevron-left"} size="extra-small" color={color} />
    </Button>
    <Text>{currentDate.getMonth() + 1}</Text>
    <Button onClick={onNextMonth}>
      <Icon icon={"chevron-right"} size="extra-small" color={color} />{" "}
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
