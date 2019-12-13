import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../../container";
import Day from "./components/day";

const DatepickerDay = ({ dayList, currentMonth, selectedDate, onSelect, color, today }) => (
  <Container style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
    {dayList &&
      dayList.map((day, index) => {
        const tmpDay = new Date(day);
        let style = null;
        let textStyle = null;
        if ((index + 1) % 7 !== 0) style = { marginRight: 5 };
        if (
          tmpDay.getDate() === today.getDate() &&
          tmpDay.getMonth() === today.getMonth() &&
          tmpDay.getFullYear() === today.getFullYear()
        )
          style = { ...style, borderRadius: 4, borderColor: color, borderWidth: 1 };
        if (tmpDay.getMonth() !== currentMonth.getMonth()) textStyle = { color: "#E0E0E0" };
        if (index === selectedDate) {
          textStyle = { color: "#FFFFFF" };
          style = { ...style, backgroundColor: color, borderRadius: 4 };
        }
        return (
          <Day
            index={index}
            day={tmpDay.getDate()}
            style={style}
            textStyle={textStyle}
            onClick={e => onSelect(e)}
          />
        );
      })}
  </Container>
);

DatepickerDay.propTypes = {
  dayList: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  selectedDate: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  today: PropTypes.instanceOf(Date).isRequired
};

export default DatepickerDay;
