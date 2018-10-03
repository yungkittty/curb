import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderTitle from "./components/header-title";
import HeaderButton from "./components/header-button";

const WindowHeader = ({ title, leftIcon, rightIcon, leftFunc, rightFunc }) => (
  <HeaderContainer>
    <HeaderButton position="left" icon={leftIcon} onClick={leftFunc} />
    <HeaderTitle title={title} />
    <HeaderButton position="right" icon={rightIcon} onClick={rightFunc} />
  </HeaderContainer>
);

WindowHeader.defaultProps = {
  leftIcon: undefined,
  rightIcon: undefined
};

WindowHeader.propTypes = {
  title: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  leftFunc: PropTypes.func.isRequired,
  rightFunc: PropTypes.func.isRequired
};

export default WindowHeader;
