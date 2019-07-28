import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderButtons from "./components/header-buttons";
import HeaderBack from "./components/header-back";

const AppHeader = ({
  // eslint-disable-line
  leftButtons,
  rightButtons,
  ...others
}) => (
  <HeaderContainer {...others}>
    <HeaderButtons buttons={leftButtons} />
    <HeaderButtons buttons={rightButtons} />
  </HeaderContainer>
);

AppHeader.defaultProps = {
  leftButtons: [],
  rightButtons: []
};

AppHeader.propTypes = {
  leftButtons: PropTypes.array, // eslint-disable-line
  rightButtons: PropTypes.array // eslint-disable-line
};

export default HeaderBack(AppHeader);
