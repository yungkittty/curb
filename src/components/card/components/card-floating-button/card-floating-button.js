import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ButtonContainer from "./components/button-container";
import CircleContainer from "../../../circle-container";
import ButtonText from "./components/button-text";
import Icon from "../../../icon";

const CardFloatingButton = ({
  theme,
  cardSize,
  likeNumber,
  floatingButtonColor,
  onFloatingButtonClick,
  floatingButtonDisabled
}) => {
  const contentColor = floatingButtonDisabled ? theme.primaryColor : floatingButtonColor;
  return (
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
        color={contentColor}
        style={!likeNumber ? { position: "relative", left: -2, top: -1 } : undefined}
      />
      {likeNumber && (
        <ButtonText weight={700} color={contentColor}>
          {likeNumber}
        </ButtonText>
      )}
    </CircleContainer>
  );
};

CardFloatingButton.defaultProps = {
  likeNumber: undefined,
  floatingButtonColor: undefined,
  floatingButtonDisabled: false
};

CardFloatingButton.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  cardSize: PropTypes.shape({
    size: PropTypes.string,
    isCardExtended: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    contentHeight: PropTypes.number,
    footerHeight: PropTypes.number,
    floatingTopPosition: PropTypes.number
  }).isRequired,
  likeNumber: PropTypes.string,
  floatingButtonColor: PropTypes.string,
  onFloatingButtonClick: PropTypes.func.isRequired,
  floatingButtonDisabled: PropTypes.bool
};

export default withTheme(CardFloatingButton);
