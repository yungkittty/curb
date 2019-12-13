import React from "react";
import PropTypes from "prop-types";
import EventContainer from "./components/event-container";
import EventHeader from "./components/event-header";
import EventContent from "./components/event-content";

const EventDisplay = ({ name, date, groupThemeColor }) => {
  return (
    <EventContainer>
      <EventHeader color={groupThemeColor} title={name} />
      <EventContent eventDate={new Date(date)} color={groupThemeColor} />
    </EventContainer>
  );
};

EventDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  groupThemeColor: PropTypes.string.isRequired
};

export default EventDisplay;
