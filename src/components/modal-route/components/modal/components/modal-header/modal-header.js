import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderMiddle from "./components/header-middle";
import HeaderButton from "./components/header-button";

const ModalHeader = ({
  title,
  progress,
  leftIcon,
  leftClick,
  rightIcon,
  rightClick
}) => (
  <HeaderContainer>
    {leftIcon !== "none" && (
      <HeaderButton position="left" icon={leftIcon} onClick={leftClick} />
    )}
    <HeaderMiddle title={title} progress={progress} />
    {rightIcon !== "none" && (
      <HeaderButton position="right" icon={rightIcon} onClick={rightClick} />
    )}
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
  progress: PropTypes.object,
  leftIcon: PropTypes.string,
  leftClick: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  rightIcon: PropTypes.string,
  rightClick: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default ModalHeader;
