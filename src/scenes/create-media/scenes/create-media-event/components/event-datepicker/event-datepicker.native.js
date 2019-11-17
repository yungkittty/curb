import React from "react";
import Icon from "../../../../../../components/icon";
import Text from "../../../../../../components/text";
import PickerContainer from "../picker-container";
import DatepickerNumber from "./components/datepicker-number";

const EventDatepicker = ({ day, month, year, onChangeDay, onChangeMonth, onChangeYear }) => (
  <PickerContainer>
    <Icon size="extra-extra-small" icon="calendar-day" color="#E0E0E0" style={{ marginRight: 14 }} />
    <DatepickerNumber />
    <Text style={{ padding: 5, fontSize: 12, fontWeight: "bold" }}>/</Text>
    <DatepickerNumber />
    <Text style={{ padding: 5, fontSize: 12, fontWeight: "bold" }}>/</Text>
    <DatepickerNumber />
  </PickerContainer>
);

export default EventDatepicker;
