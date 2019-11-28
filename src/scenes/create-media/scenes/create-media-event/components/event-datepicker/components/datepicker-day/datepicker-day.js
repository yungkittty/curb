import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../../../../../components/container";
import Day from "./components/day";

const DatepickerDay = ({ dayList, currentMonth, selectedDate, onSelect, color }) => {
  const today = new Date();
  return (
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
            style = { ...style, borderRadius: 4, border: "1px solid", borderColor: color };
          if (tmpDay.getMonth() !== currentMonth) textStyle = { color: "#E0E0E0" };
          if (selectedDate && tmpDay.getTime() === selectedDate.getTime()) {
            textStyle = { color: "#FFFFFF" };
            style = { ...style, backgroundColor: color, borderRadius: 4 };
          }
          return <Day key={index} day={tmpDay} style={style} textStyle={textStyle} onClick={onSelect} />;
        })}
    </Container>
  );
};

DatepickerDay.defaultProps = {
  selectedDate: undefined
};

DatepickerDay.propTypes = {
  dayList: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  currentMonth: PropTypes.number.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  onSelect: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default DatepickerDay;
