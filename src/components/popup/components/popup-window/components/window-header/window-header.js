import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderTitle from "./components/header-title";
import HeaderButton from "./components/header-button";
import IconType from "../../../../../general/icon/type";

// HeaderTitle can be :
// - a title (text)
// - a progress state (1 of 3)
// - nothing in rare cases

const WindowHeader = ({ title, leftIcon, rightIcon, leftFunc, rightFunc }) => (
  <HeaderContainer>
    {leftIcon !== "none" && (
      <HeaderButton position="left" icon={leftIcon} onClick={leftFunc} />
    )}
    {rightIcon !== "none" && (
      <HeaderButton position="right" icon={rightIcon} onClick={rightFunc} />
    )}
    <HeaderTitle title={title} />
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
