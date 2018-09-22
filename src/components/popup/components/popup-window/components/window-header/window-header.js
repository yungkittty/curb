import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderMiddle from "./components/header-middle";
import HeaderButton from "./components/header-button";
import IconType from "../../../../../general/icon/type";

const WindowHeader = ({ title, leftIcon, rightIcon, leftFunc, rightFunc }) => (
  <HeaderContainer>
    {leftIcon !== "none" && (
      <HeaderButton position="left" icon={leftIcon} onClick={leftFunc} />
    )}
    {rightIcon !== "none" && (
      <HeaderButton position="right" icon={rightIcon} onClick={rightFunc} />
    )}
    <HeaderMiddle progress="toto" />
  </HeaderContainer>
);

WindowHeader.propTypes = {
  title: PropTypes.string.isRequired,
  leftIcon: PropTypes.oneOf(IconType).isRequired,
  rightIcon: PropTypes.oneOf(IconType).isRequired,
  leftFunc: PropTypes.func.isRequired,
  rightFunc: PropTypes.func.isRequired
};

export default WindowHeader;
