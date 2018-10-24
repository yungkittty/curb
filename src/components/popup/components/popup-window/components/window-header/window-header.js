import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderMiddle from "./components/header-middle";
import HeaderButton from "./components/header-button";

const WindowHeader = ({
  title,
  progress,
  leftIcon,
  leftTo,
  leftFunc,
  rightTo,
  rightIcon,
  rightFunc
}) => (
  <HeaderContainer>
    {leftIcon !== "none" && (
      <HeaderButton
        position="left"
        icon={leftIcon}
        to={leftTo}
        onClick={leftFunc}
      />
    )}
    <HeaderMiddle title={title} progress={progress} />
    {rightIcon !== "none" && (
      <HeaderButton
        position="right"
        icon={rightIcon}
        to={rightTo}
        onClick={rightFunc}
      />
    )}
  </HeaderContainer>
);

WindowHeader.defaultProps = {
  title: undefined,
  progress: undefined,
  leftIcon: undefined,
  leftTo: undefined,
  leftFunc: undefined,
  rightIcon: undefined,
  rightTo: undefined,
  rightFunc: undefined
};

WindowHeader.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.object,
  leftIcon: PropTypes.string,
  leftTo: PropTypes.object,
  leftFunc: PropTypes.func,
  rightIcon: PropTypes.string,
  rightTo: PropTypes.object,
  rightFunc: PropTypes.func
};

export default WindowHeader;
