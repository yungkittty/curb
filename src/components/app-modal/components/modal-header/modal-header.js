import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderButtonIcon from "./components/header-button-icon";
import HeaderMiddle from "./components/header-middle";

const ModalHeader = ({
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
    <HeaderMiddle text={text} currentStep={currentStep} steps={steps} />
    {rightIcon ? (
      <HeaderButtonIcon
        style={{ right: 0 }}
        icon={rightIcon}
        onClick={rightOnClick}
      />
    ) : null}
  </HeaderContainer>
);

ModalHeader.defaultProps = {
  text: undefined,
  currentStep: undefined,
  steps: undefined,
  leftIcon: undefined,
  leftOnClick: undefined,
  rightIcon: undefined,
  rightOnClick: undefined
};

ModalHeader.propTypes = {
  text: PropTypes.string,
  currentStep: PropTypes.number,
  steps: PropTypes.number,
  leftIcon: PropTypes.string,
  leftOnClick: PropTypes.func,
  rightIcon: PropTypes.string,
  rightOnClick: PropTypes.func
};

export default ModalHeader;
