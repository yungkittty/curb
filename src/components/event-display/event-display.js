import React from "react";
import PropTypes from "prop-types";
import EventContainer from "./components/event-container";
import EventHeader from "./components/event-header";
import EventContent from "./components/event-content";

const EventDisplay = ({ name, date, userList = [], groupThemeColor }) => (
  <EventContainer>
    <EventHeader color={groupThemeColor} title={name} />
    <EventContent eventDate={new Date(date)} userList={userList} color={groupThemeColor} />
  </EventContainer>
);

EventDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  userList: PropTypes.arrayOf(PropTypes.string).isRequired,
  groupThemeColor: PropTypes.string.isRequired
};

export default EventDisplay;
