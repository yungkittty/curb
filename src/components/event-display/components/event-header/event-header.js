import React from "react";
import PropTypes from "prop-types";
import EventHeaderContainer from "./components/event-header-container";
import EventHeaderText from "./components/event-header-text";
import { platformBools } from "../../../../configurations/platform";

const EventHeader = ({ color, title }) => (
  <EventHeaderContainer>
    <EventHeaderText type={platformBools.isWeb ? "h1" : "h2"} weight={700} style={{ color }}>
      {title}
    </EventHeaderText>
  </EventHeaderContainer>
);

EventHeader.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default EventHeader;
