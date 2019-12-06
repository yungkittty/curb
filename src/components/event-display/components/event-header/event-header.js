import React from "react";
import PropTypes from "prop-types";
import EventHeaderContainer from "./components/event-header-container";
import Text from "../../../text";

const EventHeader = ({ color, title }) => (
  <EventHeaderContainer>
    <Text type="h1" weight={700} style={{ color }}>
      {title}
    </Text>
  </EventHeaderContainer>
);

EventHeader.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default EventHeader;
