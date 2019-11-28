import React from "react";
import PropTypes from "prop-types";
import DatepickerContainer from "./components/datepicker-container";
import DatepickerMonth from "./components/datepicker-month";
import DatepickerDayLabel from "./components/datepicker-day-label";
import DatepickerDay from "./components/datepicker-day";

const EventDatepicker = React.memo(
  ({ color, onMonthChange, currentDate, dayList, selectedDate, onSelectDate }) => {
    return (
      <DatepickerContainer>
        <DatepickerMonth onMonthChange={onMonthChange} currentDate={currentDate} color={color} />
        <DatepickerDayLabel color={color} />
        <DatepickerDay
          dayList={dayList}
          currentMonth={currentDate.getMonth()}
          selectedDate={selectedDate}
          onSelect={onSelectDate}
          color={color}
        />
      </DatepickerContainer>
    );
  }
);

EventDatepicker.defaultProps = {
  selectedDate: undefined
};

EventDatepicker.propTypes = {
  color: PropTypes.string.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
  dayList: PropTypes.arrayOf(Date).isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  onSelectDate: PropTypes.func.isRequired
};

export default EventDatepicker;
