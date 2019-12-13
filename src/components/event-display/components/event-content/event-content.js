import React from "react";
import PropTypes from "prop-types";
import EventContentContainer from "./components/event-content-container";
import ContentRemainingTime from "./components/content-remaining-time";
import ContentEventInfo from "./components/content-event-info";

const EventContent = ({ color, eventDate }) => (
  <EventContentContainer color={color}>
    <ContentRemainingTime eventDate={eventDate} />
    <ContentEventInfo eventDate={eventDate} />
  </EventContentContainer>
);

EventContent.propTypes = {
  eventDate: PropTypes.instanceOf(Date).isRequired,
  color: PropTypes.string.isRequired
};

export default EventContent;

/** 
 * import ContentEventButton from "./components/content-event-button";
 
 <ContentEventButton
      color={color}
      userList={userList}
      contentId={contentId}
      isCurrentUserJoinnedGroup={isCurrentUserJoinnedGroup}
      postId={postId}
      contentId={contentId}
    /> 
    
    EventContent.propTypes = {
  eventDate: PropTypes.instanceOf(Date).isRequired,
  userList: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
  isCurrentUserJoinnedGroup: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired,
  contentId: PropTypes.string.isRequired
};*/
