import React, { useState } from "react";
import PropTypes from "prop-types";
import DatepickerContainer from "./components/datepicker-container";
import DatepickerMonth from "./components/datepicker-month";
import DatepickerDayLabel from "./components/datepicker-day-label";
import DatepickerDay from "./components/datepicker-day";
import DatepickerTime from "./components/datepicker-time";
import initDatepickerDay from "../../utils/init-datepicker-day";

const EventDatepicker = ({ color, selectedDate, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dayList, setDayList] = useState(initDatepickerDay(new Date()));

  const updateDateTime = (date, time) => {
    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());
    return date;
  };

  const handleMonthChange = offset => {
    const tmpDate = new Date(currentDate);

    tmpDate.setMonth(currentDate.getMonth() + offset);
    setCurrentDate(tmpDate);
    setDayList(initDatepickerDay(tmpDate));
  };

  const handleSelectDate = date => {
    if (selectedDate && date) {
      date.setHours(selectedDate.getHours());
      date.setMinutes(selectedDate.getMinutes());
    } else if (date) {
      date.setHours(currentDate.getHours());
      date.setMinutes(currentDate.getMinutes());
    }
    onSelectDate(date);
  };

  const handleTimeChange = date => {
    if (selectedDate) {
      onSelectDate(updateDateTime(selectedDate, date));
    } else {
      const tmpCurrentDate = updateDateTime(new Date(currentDate), date);
      setCurrentDate(tmpCurrentDate);
      setDayList(initDatepickerDay(tmpCurrentDate));
    }
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
        onSelect={date => handleSelectDate(date)}
        color={color}
      />
      <DatepickerTime date={selectedDate} onChange={handleTimeChange} />
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
