import React, { useState } from "react";
import PropTypes from "prop-types";
import DateTimePicker from "react-native-modal-datetime-picker";
import DatepickerContainer from "./components/datepicker-container";
import DatepickerDataContainer from "./components/datepicker-data-container";
import DatepickerDataDay from "./components/datepicker-data-day";
import DatepickerDataTime from "./components/datepicker-data-time";
import DatepickerStadiumButton from "./components/datepicker-stadium-button";

const EventDatepicker = ({ color, selectedDate, onSelectDate }) => {
  const [isDateTimePickerVisible, setDateTimePickerVisibility] = useState(true);

  const handleDatePickerConfirm = date => {
    setDateTimePickerVisibility(false);
    onSelectDate(date);
  };

  return (
    <DatepickerContainer>
      <DatepickerDataContainer>
        {selectedDate && (
          <>
            <DatepickerDataDay date={selectedDate} />
            <DatepickerDataTime date={selectedDate} />
          </>
        )}
        <DatepickerStadiumButton
          color={color}
          text="selectDate"
          icon="calendar-alt"
          onClick={() => setDateTimePickerVisibility(true)}
        />
      </DatepickerDataContainer>
      <DateTimePicker
        isVisible={isDateTimePickerVisible}
        mode="datetime"
        onConfirm={date => handleDatePickerConfirm(date)}
        onCancel={() => setDateTimePickerVisibility(false)}
        is24Hour
        date={selectedDate || new Date()}
        minimumDate={new Date()}
      />
    </DatepickerContainer>
  );
};

EventDatepicker.defaultProps = {
  selectedDate: undefined
};

EventDatepicker.propTypes = {
  color: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  onSelectDate: PropTypes.func.isRequired
};

export default EventDatepicker;
