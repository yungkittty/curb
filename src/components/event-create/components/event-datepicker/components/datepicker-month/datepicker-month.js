import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Button from "../../../../../button";
import Icon from "../../../../../icon";
import Text from "../../../../../text";
import MonthContainer from "./components/month-container";

const DatepickerMonth = ({ t, onMonthChange, currentDate, color }) => {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ];
  return (
    <MonthContainer>
      <Button onClick={() => onMonthChange(-1)}>
        <Icon icon="chevron-left" size="extra-extra-small" color={color} />
      </Button>
      <Text weight={700} type="h5" style={{ color }}>
        {`${t(months[currentDate.getMonth()])} ${currentDate.getFullYear()}`}
      </Text>
      <Button onClick={() => onMonthChange(1)}>
        <Icon icon="chevron-right" size="extra-extra-small" color={color} />
      </Button>
    </MonthContainer>
  );
};

DatepickerMonth.propTypes = {
  t: PropTypes.func.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
  color: PropTypes.string.isRequired
};

export default _.flowRight([withTranslation("common")])(DatepickerMonth);
