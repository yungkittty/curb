import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../../../../../components/container";
import Day from "./components/day";

const DatepickerDay = ({ dayList, color, today }) => (
  <Container>
    {dayList &&
      dayList.map((day, index) => {
        const tmpDay = new Date(day);
        return (
          <Day
            key={index}
            day={tmpDay.getDate()}
            style={tmpDay.getDate() === today ? { borderRadius: 4, border: `1px solid ${color}` } : null}
          />
        );
      })}
  </Container>
);

DatepickerDay.propTypes = {
  dayList: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  color: PropTypes.string.isRequired,
  today: PropTypes.instanceOf(Date).isRequired
};

export default DatepickerDay;
