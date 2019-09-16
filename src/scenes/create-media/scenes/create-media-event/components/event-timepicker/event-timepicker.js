import React from "react";
import Icon from "../../../../../../components/icon";
import TimePickerContainer from "./components/timepicker-container";
import NumberPicker from "./components/number-picker";

const EventTimepicker = () => (
  <TimePickerContainer>
    <Icon size="extra-extra-small" icon="clock" color="#E0E0E0" style={{ marginRight: 14 }} />
    <NumberPicker style={{ width: 25, height: 25 }} />
    <NumberPicker style={{ width: 25, height: 25 }} />
  </TimePickerContainer>
);

export default EventTimepicker;
