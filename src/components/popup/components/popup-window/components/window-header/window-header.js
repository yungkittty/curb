import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderMiddle from "./components/header-middle";
import HeaderButton from "./components/header-button";

const WindowHeader = ({
  title,
  progress,
  leftIcon,
  leftFunc,
  rightIcon,
  rightFunc
}) => (
  <HeaderContainer>
    {leftIcon !== "none" && (
      <HeaderButton position="left" icon={leftIcon} onClick={leftFunc} />
    )}
    <HeaderMiddle title={title} progress={progress} />
    {rightIcon !== "none" && (
      <HeaderButton position="right" icon={rightIcon} onClick={rightFunc} />
    )}
  </HeaderContainer>
);

WindowHeader.defaultProps = {
  title: undefined,
  progress: undefined,
  leftIcon: undefined,
  rightIcon: undefined
};

WindowHeader.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.object,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  leftFunc: PropTypes.func.isRequired,
  rightFunc: PropTypes.func.isRequired
};

export default WindowHeader;
