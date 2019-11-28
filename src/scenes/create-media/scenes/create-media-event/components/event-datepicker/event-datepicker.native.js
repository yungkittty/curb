import React, { useState } from "react";
import PropTypes from "prop-types";
import DateTimePicker from "react-native-modal-datetime-picker";
import Container from "../../../../../../components/container";
import DatepickerStadiumButton from "./components/datepicker-stadium-button";

const EventDatepicker = ({ color, selectedDate, onSelectDate }) => {
  const [isDateTimePickerVisible, setDateTimePickerVisibility] = useState(true);
  const [dateTimePickerMode, setDateTimePickerMode] = useState("datetime");

  const handleButtonClick = mode => {
    setDateTimePickerMode(mode);
    setDateTimePickerVisibility(true);
  };

  const handleDatePickerConfirm = date => {
    setDateTimePickerVisibility(false);
    onSelectDate(date);
  };

  return (
    <Container>
      <DatepickerStadiumButton
        color={color}
        text="selectDate"
        icon="calendar-alt"
        onClick={() => handleButtonClick("date")}
      />
      <DatepickerStadiumButton
        color={color}
        text="selectDate"
        icon="calendar-alt"
        onClick={() => handleButtonClick("time")}
      />
      <DateTimePicker
        isVisible={isDateTimePickerVisible}
        mode={dateTimePickerMode}
        onConfirm={date => handleDatePickerConfirm(date)}
        onCancel={() => setDateTimePickerVisibility(false)}
        is24Hour
        date={selectedDate}
        minimumDate={new Date()}
      />
    </Container>
  );
};

EventDatepicker.defaultProps = {
  selectedDate: new Date()
};

EventDatepicker.propTypes = {
  color: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  onSelectDate: PropTypes.func.isRequired
};

export default EventDatepicker;
