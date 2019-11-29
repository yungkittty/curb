import React from "react";
import PropTypes from "prop-types";
import Stadium from "../../../../../../../../components/stadium";
import Button from "../../../../../../../../components/button";
import Icon from "../../../../../../../../components/icon";
import Text from "../../../../../../../../components/text";

const DatepickerStadiumButton = ({ color, text, icon, onClick }) => (
  <Stadium
    as={Button}
    backgroundColor={color}
    radius="extra-small"
    onClick={() => onClick()}
    style={{ flexDirection: "row" }}
  >
    <Icon size="extra-small" icon={icon} style={{ color: "white" }} />
    <Text type="h6" weight={700} style={{ flex: 1, textAlign: "center", color: "white" }}>
      {text}
    </Text>
  </Stadium>
);

DatepickerStadiumButton.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default DatepickerStadiumButton;
