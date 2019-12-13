import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../../../icon";
import Text from "../../../../../text";
import DataContainer from "../data-container";

const DatepickerDataTime = ({ date }) => (
  <DataContainer>
    <Icon size="extra-small" icon="clock" color="#e0e0e0" style={{ marginRight: 8 }} />
    <Text type="h4" weight={700}>{`${date.getHours()}  :  ${date.getMinutes()}`}</Text>
  </DataContainer>
);

DatepickerDataTime.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

export default DatepickerDataTime;
