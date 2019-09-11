import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ButtonContainer from "./components/button-container";
import CircleContainer from "../../../circle-container";
import Text from "../../../text";
import Icon from "../../../icon";

const CardFloatingButton = ({
  theme,
  cardSize,
  likeNumber,
  floatingButtonColor,
  onFloatingButtonClick,
  floatingButtonDisabled
}) => (
  <CircleContainer
    diameter="small"
    as={ButtonContainer}
    cardSize={cardSize}
    onClick={onFloatingButtonClick}
    disabled={floatingButtonDisabled}
  >
    <Icon
      icon={likeNumber ? "heart" : "paper-plane"}
      size="extra-small"
      color={floatingButtonColor || theme.primaryColor}
      style={!likeNumber && { position: "relative", left: -2 }}
    />
    <Text weight={700} type="h6" style={{ color: floatingButtonColor || theme.primaryColor, marginTop: 2 }}>
      {likeNumber}
    </Text>
  </CircleContainer>
);

CardFloatingButton.defaultProps = {
  cardSize: undefined,
  likeNumber: undefined,
  floatingButtonColor: undefined,
  floatingButtonDisabled: false
};

CardFloatingButton.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  cardSize: PropTypes.string,
  likeNumber: PropTypes.string,
  floatingButtonColor: PropTypes.string,
  onFloatingButtonClick: PropTypes.func.isRequired,
  floatingButtonDisabled: PropTypes.bool
};

export default withTheme(CardFloatingButton);
