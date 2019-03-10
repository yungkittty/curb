import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderButtonIcon from "./components/header-button-icon";
import Text from "../../../text";
import HeaderStep from "./components/header-step";

const AppModalHeader = ({
  text,
  currentStep,
  steps,
  leftIcon,
  leftOnClick,
  rightIcon,
  rightOnClick
}) => (
  <HeaderContainer>
    {leftIcon ? (
      <HeaderButtonIcon
        style={{ left: 0 }}
        icon={leftIcon}
        onClick={leftOnClick}
      />
    ) : null}
    {text ? (
      <Text type="h3" weight={600}>
        {text}
      </Text>
    ) : null}
    {steps ? _.times(steps, index => (
      <HeaderStep key={index} enabled={index >= currentStep} />
    )) : null}
    {rightIcon ? (
      <HeaderButtonIcon
        style={{ right: 0 }}
        icon={rightIcon}
        onClick={rightOnClick}
      />
    ) : null}
  </HeaderContainer>
);

AppModalHeader.propTypes = {
  text: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  leftIcon: PropTypes.string.isRequired,
  leftOnClick: PropTypes.func.isRequired,
  rightIcon: PropTypes.string.isRequired,
  rightOnClick: PropTypes.func.isRequired
};

export default AppModalHeader;
