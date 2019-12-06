import React from "react";
import PropTypes from "prop-types";
import EventContentContainer from "./components/event-content-container";
import ContentRemainingTime from "./components/content-remaining-time";
import ContentEventButton from "./components/content-event-button";
import ContentEventInfo from "./components/content-event-info";

const EventContent = ({ color, eventDate, userList }) => (
  <EventContentContainer color={color}>
    <ContentRemainingTime eventDate={eventDate} />
    <ContentEventButton color={color} userList={userList} />
    <ContentEventInfo eventDate={eventDate} />
  </EventContentContainer>
);

EventContent.propTypes = {
  eventDate: PropTypes.instanceOf(Date).isRequired,
  userList: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired
};

export default EventContent;
