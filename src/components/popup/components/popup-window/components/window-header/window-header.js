import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderMiddle from "./components/header-middle";
import HeaderButton from "./components/header-button";
import IconType from "../../../../../general/icon/type";

const WindowHeader = ({
  title,
  progress,
  leftIcon,
  leftFunc,
  rightIcon,
  rightFunc
}) => {
  return (
    <HeaderContainer>
      {leftIcon !== "none" && (
        <HeaderButton position="left" icon={leftIcon} onClick={leftFunc} />
      )}
      {rightIcon !== "none" && (
        <HeaderButton position="right" icon={rightIcon} onClick={rightFunc} />
      )}
      <HeaderMiddle title={title} progress={progress} />
    </HeaderContainer>
  );
};

WindowHeader.defaultProps = {
  title: undefined,
  progress: undefined
};

WindowHeader.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.object,
  leftIcon: PropTypes.oneOf(IconType).isRequired,
  rightIcon: PropTypes.oneOf(IconType).isRequired,
  leftFunc: PropTypes.func.isRequired,
  rightFunc: PropTypes.func.isRequired
};

export default WindowHeader;
