import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../../../icon";
import Text from "../../../../../text";
import DataContainer from "../data-container";

const DatepickerDataDay = ({ date }) => (
  <DataContainer>
    <Icon size="extra-small" icon="calendar-day" color="#e0e0e0" style={{ marginRight: 8 }} />
    <Text type="h4" weight={700}>{`${date.getDate()}  /  ${date.getMonth() +
      1}  /  ${date.getFullYear()}`}</Text>
  </DataContainer>
);

DatepickerDataDay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

export default DatepickerDataDay;
