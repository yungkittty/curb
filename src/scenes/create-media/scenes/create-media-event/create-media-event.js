import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Container from "../../../../components/container";
import Input from "../../../../components/input";
import EventContainer from "./components/event-container";
import EventHeaderContainer from "./components/event-header-container";
import EventContentContainer from "./components/event-content-container";
import EventTimepicker from "./components/event-timepicker";

const CreateMediaEvent = ({ groupTheme = "#56CCF2", t }) => (
  <EventContainer>
    <EventHeaderContainer style={{ backgroundColor: groupTheme }}>
      <Input />
      <hr style={{ width: 380, borderTop: 0 }} />
    </EventHeaderContainer>
    <EventContentContainer style={{ backgroundColor: "white" }}>
      <EventTimepicker />
    </EventContentContainer>
  </EventContainer>
);

CreateMediaEvent.propTypes = {
  t: PropTypes.func.isRequired,
  groupTheme: PropTypes.string.isRequired
};

export default CreateMediaEvent;
