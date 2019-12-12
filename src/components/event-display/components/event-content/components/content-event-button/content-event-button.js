import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Text from "../../../../../text";
import Stadium from "../../../../../stadium";
import Button from "../../../../../button";
import EventButtonContainer from "./components/event-button-container";
import EventInfo from "../event-info";

const ContentEventButton = ({
  t,
  color,
  userList,
  joinEvent,
  postId,
  contentId,
  isCurrentUserJoinnedGroup
}) => (
  <EventButtonContainer>
    {isCurrentUserJoinnedGroup && (
      <Stadium
        as={Button}
        backgroundColor="white"
        radius="extra-small"
        onClick={() => joinEvent({ contentId, postId })}
      >
        <Text type="h4" weight={700} style={{ color }}>
          {t("join")}
        </Text>
      </Stadium>
    )}
    <EventInfo icon="user-friends" text={`${userList.length}`} />
  </EventButtonContainer>
);

ContentEventButton.defaultProps = {
  userList: []
};

ContentEventButton.propTypes = {
  t: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  userList: PropTypes.arrayOf(PropTypes.string),
  contentId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  joinEvent: PropTypes.func.isRequired,
  isCurrentUserJoinnedGroup: PropTypes.bool.isRequired
};

export default _.flowRight([withTranslation("common")])(ContentEventButton);
