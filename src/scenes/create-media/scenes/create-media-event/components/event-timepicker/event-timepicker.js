import React from "react";
import Icon from "../../../../../../components/icon";
import Text from "../../../../../../components/text";
import TimePickerContainer from "./components/timepicker-container";
import NumberPicker from "./components/number-picker";

const EventTimepicker = () => (
  <TimePickerContainer style={{ fontSize: 12, fontWeight: "bold", color: "#4F4F4F" }}>
    <Icon size="extra-extra-small" icon="clock" color="#E0E0E0" style={{ marginRight: 14 }} />
    <NumberPicker
      style={{ width: 25, height: 25, padding: 0, textAlign: "center", fontSize: 12, fontWeight: "bold" }}
    />
    <Text style={{ padding: 5, fontSize: 12, fontWeight: "bold" }}>:</Text>
    <NumberPicker
      style={{ width: 25, height: 25, padding: 0, textAlign: "center", fontSize: 12, fontWeight: "bold" }}
    />
  </TimePickerContainer>
);

export default EventTimepicker;
