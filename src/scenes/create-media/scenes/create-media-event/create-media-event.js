import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Input from "../../../../components/input";
import Container from "../../../../components/container";
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
          backgroundColor: "transparent",
          height: 18
        }}
        placeholder="Name of the event"
        placeholderTextColor="white"
      />
      <Container
        style={{ backgroundColor: "white", marginLeft: "auto", marginRight: "auto", height: 1, width: "70%" }}
      />
    </EventHeaderContainer>
    <EventContentContainer>
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
/*<Input
        style={{
          padding: 0,
          height: "18px",
          textAlign: "center",
          backgroundColor: "yellow",
          color: "white",
          placeholder: "Name of the event"
        }}
      />*/
