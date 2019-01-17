import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderButtonIcon from "./components/header-button-icon";
import HeaderMiddle from "./components/header-middle";

const ModalHeader = ({
  title,
  progress,
  leftIcon,
  leftClick,
  rightIcon,
  rightClick
}) => (
  <HeaderContainer>
    <HeaderButtonIcon icon={leftIcon} onClick={leftClick} />
    <HeaderMiddle title={title} progress={progress} />
    <HeaderButtonIcon icon={rightIcon} onClick={rightClick} />
  </HeaderContainer>
);

ModalHeader.defaultProps = {
  title: undefined,
  progress: undefined,
  leftIcon: undefined,
  leftClick: undefined,
  rightIcon: undefined,
  rightClick: undefined
};

ModalHeader.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.shape({
    progress: PropTypes.number,
    total: PropTypes.number
  }),
  leftIcon: PropTypes.string,
  leftClick: PropTypes.func,
  rightIcon: PropTypes.string,
  rightClick: PropTypes.func
};

export default ModalHeader;
