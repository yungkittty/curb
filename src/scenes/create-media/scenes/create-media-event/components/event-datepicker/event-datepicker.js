import React from "react";
import Container from "../../../../../../components/container";
import DatepickerMonth from "./components/datepicker-month";
import DatepickerDayLabel from "./components/datepicker-day-label";
import DatepickerDay from "./components/datepicker-day";

const EventDatepicker = () => (
  <Container style={{ backgroundColor: "green" }}>
    <DatepickerMonth />
    <DatepickerDayLabel labels={["M", "T", "W", "T", "F", "S", "S"]} />
    <DatepickerDay />
  </Container>
);

export default EventDatepicker;
