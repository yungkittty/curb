import React, { useState } from "react";
import PropTypes from "prop-types";
import DatepickerContainer from "./components/datepicker-container";
import DatepickerMonth from "./components/datepicker-month";
import DatepickerDayLabel from "./components/datepicker-day-label";
import DatepickerDay from "./components/datepicker-day";
import DatepickerTime from "./components/datepicker-time";
import initDatepickerDay from "../../utils/init-datepicker-day";

const EventDatepicker = React.memo(({ color, selectedDate, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dayList, setDayList] = useState(initDatepickerDay(new Date()));

  const handleMonthChange = offset => {
    const tmpDate = new Date(currentDate);

    tmpDate.setMonth(currentDate.getMonth() + offset);
    setCurrentDate(tmpDate);
    setDayList(initDatepickerDay(tmpDate));
  };

  const handleTimeChange = date => {
    setCurrentDate(date);
    setDayList(initDatepickerDay(date));
  };

  return (
    <DatepickerContainer>
      <DatepickerMonth
        onMonthChange={offset => handleMonthChange(offset)}
        currentDate={currentDate}
        color={color}
      />
      <DatepickerDayLabel color={color} />
      <DatepickerDay
        dayList={dayList}
        currentMonth={currentDate.getMonth()}
        selectedDate={selectedDate}
        onSelect={onSelectDate}
        color={color}
      />
      <DatepickerTime date={currentDate} onChange={handleTimeChange} />
    </DatepickerContainer>
  );
});

EventDatepicker.propTypes = {
  color: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  onSelectDate: PropTypes.func.isRequired
};

export default EventDatepicker;
