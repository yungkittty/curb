import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import DayLabelContainer from "./components/day-label-container";
import DayLabelText from "./components/day-label-text";

const DatepickerDayLabel = ({ t, color }) => {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  return (
    <DayLabelContainer>
      {days.map((day, index) => (
        <DayLabelText color={color} index={index}>
          {t(day)[0]}
        </DayLabelText>
      ))}
    </DayLabelContainer>
  );
};

DatepickerDayLabel.propTypes = {
  t: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export default _.flowRight([withTranslation("common")])(DatepickerDayLabel);
