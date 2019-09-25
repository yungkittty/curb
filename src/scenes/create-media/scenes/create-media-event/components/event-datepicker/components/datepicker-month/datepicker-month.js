import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Button from "../../../../../../../../components/button";
import Icon from "../../../../../../../../components/icon";
import Text from "../../../../../../../../components/text";
import MonthContainer from "./components/month-container";
import MonthText from "./components/month-text";

const DatepickerMonth = ({ t, onPrevMonth, onNextMonth, currentDate, color }) => {
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
      <Button onClick={onPrevMonth} style={{ position: "absolute", left: 0 }}>
        <Icon icon="chevron-left" size="extra-small" color={color} />
      </Button>
      <MonthText weight={700} type="h6" color={color}>
        {t(months[currentDate.getMonth() + 1])} {currentDate.getFullYear()}
      </MonthText>
      <Button onClick={onNextMonth} style={{ position: "absolute", right: 0 }}>
        <Icon icon="chevron-right" size="extra-small" color={color} />
      </Button>
    </MonthContainer>
  );
};

DatepickerMonth.propTypes = {
  t: PropTypes.func.isRequired,
  onPrevMonth: PropTypes.func.isRequired,
  onNextMonth: PropTypes.func.isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
  color: PropTypes.string.isRequired
};

export default _.flowRight([withTranslation("common")])(DatepickerMonth);
