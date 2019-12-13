import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ButtonContainer from "./components/button-container";
import CircleContainer from "../../../circle-container";
import ButtonText from "./components/button-text";
import { platformBools } from "../../../../configurations/platform";
import Icon from "../../../icon";

const CardFloatingButton = ({
  theme,
  likeNumber,
  floatingButtonColor,
  onFloatingButtonClick,
  floatingButtonComponent,
  floatingButtonDisabled
}) => {
  const contentColor = floatingButtonDisabled ? theme.primaryColor : floatingButtonColor;
  const isLike = !_.isUndefined(likeNumber);
  return (
    <CircleContainer
      diameter="small"
      as={ButtonContainer}
      onClick={onFloatingButtonClick}
      disabled={floatingButtonDisabled}
      style={{ overflow: platformBools.isIos ? "visible" : "hidden" }}
    >
      {floatingButtonComponent ? (
        React.cloneElement(floatingButtonComponent)
      ) : (
        <React.Fragment>
          <Icon
            icon={isLike ? "heart" : "paper-plane"}
            size="extra-small"
            color={contentColor}
            style={!isLike ? { position: "relative", left: -2, top: -1 } : undefined}
          />
          {isLike && (
            <ButtonText weight={700} color={contentColor}>
              {likeNumber}
            </ButtonText>
          )}
        </React.Fragment>
      )}
    </CircleContainer>
  );
};

CardFloatingButton.defaultProps = {
  likeNumber: undefined,
  floatingButtonColor: undefined,
  floatingButtonComponent: undefined,
  floatingButtonDisabled: false
};

CardFloatingButton.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  likeNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  floatingButtonColor: PropTypes.string,
  onFloatingButtonClick: PropTypes.func.isRequired,
  floatingButtonComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  floatingButtonDisabled: PropTypes.bool
};

export default withTheme(CardFloatingButton);
