import React from "react";
import PropTypes from "prop-types";
import WeekContainer from "./components/week-container";
import Day from "./components/day";

const Week = ({ dayList, currentMonth, selectedDate, onSelect, color }) => {
  const today = new Date();
  return (
    <WeekContainer>
      {dayList &&
        dayList.map((day, index) => {
          const isSelected =
            selectedDate &&
            day.getDate() === selectedDate.getDate() &&
            day.getMonth() === selectedDate.getMonth() &&
            day.getFullYear() === selectedDate.getFullYear();
          return (
            <Day
              day={day}
              today={today}
              currentMonth={currentMonth}
              isSelected={isSelected}
              onClick={onSelect}
              color={color}
            />
          );
        })}
    </WeekContainer>
  );
};

Week.defaultProps = {
  selectedDate: undefined
};

Week.propTypes = {
  dayList: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  currentMonth: PropTypes.number.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  onSelect: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default Week;
