import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../../../icon";
import Text from "../../../../../text";
import PickerContainer from "../../../picker-container";
import TimepickerNumber from "./components/timepicker-number";

const DatepickerTime = ({ date, onChange }) => {
  const checkValue = (value, limit) => {
    if (value < limit) {
      if (limit === 24) onChange(new Date(date.setHours(value)));
      else onChange(new Date(date.setMinutes(value)));
    }
  };

  return (
    <PickerContainer style={{ fontSize: 12, color: "#4F4F4F" }}>
      <Icon size="extra-extra-small" icon="clock" color="#E0E0E0" style={{ marginRight: 14 }} />
      <TimepickerNumber
        type="number-pad"
        value={date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
        onChange={({ target: { value } }) => checkValue(value, 24)}
      />
      <Text weight={700} style={{ padding: 5, fontSize: 12 }}>
        :
      </Text>
      <TimepickerNumber
        type="number-pad"
        value={date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
        onChange={({ target: { value } }) => checkValue(value, 60)}
      />
    </PickerContainer>
  );
};

DatepickerTime.defaultProps = {
  date: new Date()
};

DatepickerTime.propTypes = {
  date: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired
};

export default DatepickerTime;
