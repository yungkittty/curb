import React from "react";
import PropTypes from "prop-types";
import Button from "../../../../../../../../../../../../components/button";
import Text from "../../../../../../../../../../../../components/text";

const Day = ({ day, today, currentMonth, isSelected, onClick, color }) => {
  const isToday =
    day.getDate() === today.getDate() &&
    day.getMonth() === today.getMonth() &&
    day.getFullYear() === today.getFullYear();

  const isClickable = date => {
    if (
      (date > new Date() && date.getMonth() === currentMonth) ||
      (isToday && today.getMonth() === currentMonth)
    )
      return true;
    return false;
  };

  const textColor = () => {
    if (isSelected) return "white";
    else if (isClickable(day)) return "#828282";
    return "#e0e0e0";
  };

  return (
    <Button
      style={{
        flex: 1,
        textAlign: "center",
        backgroundColor: isSelected ? color : "white",
        borderWidth: isToday ? 1 : 0,
        borderColor: color,
        borderStyle: "solid",
        borderRadius: 4,
        margin: 1
      }}
      onClick={() => (isClickable(day) ? onClick(day) : onClick(null))}
    >
      <Text
        type="h6"
        weight={700}
        style={{
          color: textColor()
        }}
      >
        {day.getDate()}
      </Text>
    </Button>
  );
};

Day.defaultProps = {
  isSelected: undefined
};

Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  today: PropTypes.instanceOf(Date).isRequired,
  currentMonth: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default Day;
