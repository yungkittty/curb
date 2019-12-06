import React from "react";
import PropTypes from "prop-types";
import DatepickerDayContainer from "./components/datepicker-day-container";
import Week from "./components/week";

const DatepickerDay = ({ dayList, currentMonth, selectedDate, onSelect, color }) => (
  <DatepickerDayContainer>
    {dayList &&
      dayList.map((weekList, index) => (
        <Week
          key={index}
          dayList={weekList}
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onSelect={onSelect}
          color={color}
        />
      ))}
  </DatepickerDayContainer>
);

DatepickerDay.defaultProps = {
  selectedDate: undefined
};

DatepickerDay.propTypes = {
  dayList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.instanceOf(Date))).isRequired,
  currentMonth: PropTypes.number.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  onSelect: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default DatepickerDay;
