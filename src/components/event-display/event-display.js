import React from "react";
import PropTypes from "prop-types";
import EventContainer from "./components/event-container";
import EventHeader from "./components/event-header";
import EventContent from "./components/event-content";

const EventDisplay = ({ eventTitle, eventDate, userList, groupTheme }) => (
  <EventContainer>
    <EventHeader color={groupTheme} title={eventTitle} />
    <EventContent eventDate={eventDate} userList={userList} color={groupTheme} />
  </EventContainer>
);

EventDisplay.propTypes = {
  eventTitle: PropTypes.string.isRequired,
  eventDate: PropTypes.instanceOf(Date).isRequired,
  userList: PropTypes.arrayOf(PropTypes.string).isRequired,
  groupTheme: PropTypes.string.isRequired
};

export default EventDisplay;
