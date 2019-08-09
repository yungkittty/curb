import React from "react";
import PropTypes from "prop-types";
import Circle from "../../../../../../../../components/circle";
import Icon from "../../../../../../../../components/icon";

const TitleCircleIcon = ({
  // eslint-disable-line
  groupStatus,
  groupGradientColors
}) => (
  <Circle
    // eslint-disable-line
    diameter="extra-extra-small"
    backgroundColor="white"
    component={Icon}
    icon={groupStatus === "public" ? "users" : "lock"}
    size="extra-extra-small"
    color={groupGradientColors[0]}
  />
);

TitleCircleIcon.propTypes = {
  groupStatus: PropTypes.string.isRequired,
  groupGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TitleCircleIcon;
