import React from "react";
import PropTypes from "prop-types";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";

const ItemContent = ({
  // eslint-disable-line
  messageData,
  groupTheme,
  inverted
}) => (
  <ContentContainer inverted={inverted}>
    <ContentTitle groupTheme={groupTheme} inverted={inverted} isIntended>
      {/* eslint-disable-line */}
      {messageData}
    </ContentTitle>
  </ContentContainer>
);

ItemContent.propTypes = {
  // eslint-disable-next-line
  messageData: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  inverted: PropTypes.bool.isRequired
};

export default ItemContent;
