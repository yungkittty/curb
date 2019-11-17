import React, { useState } from "react";
import PropTypes from "prop-types";
import DatepickerContainer from "./components/datepicker-container";
import DatepickerMonth from "./components/datepicker-month";
import DatepickerDayLabel from "./components/datepicker-day-label";
import DatepickerDay from "./components/datepicker-day";

const initDatepickerDay = currentDate => {
  let tmpDate = new Date(currentDate);
  const tmpList = [];

  while (tmpDate.getMonth() === currentDate.getMonth()) {
    tmpDate.setDate(tmpDate.getDate() - 1);
    tmpList.unshift(new Date(tmpDate));
  }
  while (tmpDate.getDay() !== 1) {
    tmpDate.setDate(tmpDate.getDate() - 1);
    tmpList.unshift(new Date(tmpDate));
  }
  tmpDate = new Date(currentDate);
  while (tmpList.length < 42) {
    tmpList.push(new Date(tmpDate));
    tmpDate.setDate(tmpDate.getDate() + 1);
  }
  return tmpList;
};

const EventDatepicker = React.forwardRef(({ color }, ref) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dayList, setDayList] = useState(() => initDatepickerDay(currentDate));
  const [selectedDate, setSelectedDate] = useState(undefined);

  const onPrevMonth = () => {
    const tmpDate = currentDate;
    tmpDate.setMonth(currentDate.getMonth() - 1);
    tmpDate.setDate(1);
    setCurrentDate(tmpDate);
    setDayList(initDatepickerDay(tmpDate));
  };

  const onNextMonth = () => {
    const tmpDate = currentDate;
    tmpDate.setMonth(currentDate.getMonth() + 1);
    tmpDate.setDate(1);
    setCurrentDate(tmpDate);
    setDayList(initDatepickerDay(tmpDate));
  };

  return (
    <DatepickerContainer>
      <DatepickerMonth
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
        currentDate={currentDate}
        color={color}
      />
      <DatepickerDayLabel color={color} />
      <DatepickerDay
        dayList={dayList}
        currentMonth={currentDate}
        selectedDate={selectedDate}
        onSelect={setSelectedDate}
        color={color}
        today={new Date()}
      />
    </DatepickerContainer>
  );
});

EventDatepicker.propTypes = {
  color: PropTypes.string.isRequired
};

export default EventDatepicker;
