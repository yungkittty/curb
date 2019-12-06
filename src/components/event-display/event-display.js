import React from "react";
import PropTypes from "prop-types";
import EventContainer from "./components/event-container";
import EventHeader from "./components/event-header";
import EventContent from "./components/event-content";

const EventDisplay = ({ name, date, userList = [], groupTheme }) => (
  <EventContainer>
    <EventHeader color={groupTheme} title={name} />
    <EventContent eventDate={new Date(date)} userList={userList} color={groupTheme} />
  </EventContainer>
);

EventDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  userList: PropTypes.arrayOf(PropTypes.string).isRequired,
  groupTheme: PropTypes.string.isRequired
};

export default EventDisplay;
