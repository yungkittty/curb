import React from "react";
import PropTypes from "prop-types";
import TitleContainer from "./components/title-container";
import TitleText from "./components/title-text";
import TitleCircleIcon from "./components/title-circle-icon";

const HeaderTitle = ({
  // eslint-disable-line
  groupName,
  groupStatus,
  groupGradientColors
}) => (
  <TitleContainer>
    <TitleText>
      {/* eslint-disable-line */}
      {groupName}
    </TitleText>
    <TitleCircleIcon
      // eslint-disable-line
      groupStatus={groupStatus}
      groupGradientColors={groupGradientColors}
    />
  </TitleContainer>
);

HeaderTitle.propTypes = {
  groupName: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired,
  groupGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default HeaderTitle;
