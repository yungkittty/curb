import React from "react";
import PropTypes from "prop-types";
import Icon from "../../../../../../../../../../components/icon";
import Text from "../../../../../../../../../../components/text";
import InfoContainer from "./components/info-container";

const EventInfo = ({ icon, text }) => (
  <InfoContainer style={{ flexDirection: "row", alignItems: "center" }}>
    <Icon size="extra-extra-small" icon={icon} style={{ color: "white", marginRight: 10 }} />
    <Text type="h5" weight={700} style={{ color: "white" }}>
      {text}
    </Text>
  </InfoContainer>
);

EventInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default EventInfo;
