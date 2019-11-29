import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../../../../../../components/icon";
import Text from "../../../../../../../../components/text";
import DataContainer from "../data-container";

const DatepickerDataDay = ({ date }) => (
  <DataContainer>
    <Icon size="extra-small" icon="calendar-day" color="#e0e0e0" style={{ marginRight: 8 }} />
    <Text type="h4" weight={700}>{`${date.getDay()}  /  ${date.getMonth()}  /  ${date.getFullYear()}`}</Text>
  </DataContainer>
);

DatepickerDataDay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

export default DatepickerDataDay;
