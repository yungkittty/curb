import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Text from "../../../../../text";
import Stadium from "../../../../../stadium";
import Button from "../../../../../button";
import EventButtonContainer from "./components/event-button-container";
import EventInfo from "../event-info";

const ContentEventButton = ({ t, color, userList }) => (
  <EventButtonContainer>
    <Stadium
      as={Button}
      backgroundColor="white"
      radius="extra-small"
      onClick={() => console.log("join group")}
    >
      <Text type="h4" weight={700} style={{ color }}>
        {t("join")}
      </Text>
    </Stadium>
    <EventInfo icon="user-friends" text={`${userList.length}`} />
  </EventButtonContainer>
);

ContentEventButton.propTypes = {
  t: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  userList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default _.flowRight([withTranslation("common")])(ContentEventButton);
