import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Container from "../../../../components/container";
import Input from "../../../../components/input";
import EventContainer from "./components/event-container";
import EventHeaderContainer from "./components/event-header-container";
import EventContentContainer from "./components/event-content-container";
import EventDatepicker from "./components/event-datepicker";
import EventTimepicker from "./components/event-timepicker";

const CreateMediaEvent = ({ groupTheme, t }) => (
  <EventContainer>
    <EventHeaderContainer style={{ backgroundColor: groupTheme }}>
      <Input
        style={{
          padding: 0,
          height: 38,
          textAlign: "center",
          backgroundColor: "transparent",
          color: "white",
          placeholder: "Name of the event"
        }}
      />
    </EventHeaderContainer>
    <EventContentContainer style={{ backgroundColor: "white" }}>
      <EventDatepicker color={groupTheme} />
      <EventTimepicker />
    </EventContentContainer>
  </EventContainer>
);

CreateMediaEvent.propTypes = {
  t: PropTypes.func.isRequired,
  groupTheme: PropTypes.string.isRequired
};

export default _.flowRight([withTranslation()])(CreateMediaEvent);

//     web only  <hr style={{ width: 380, borderTop: 0 }} />
