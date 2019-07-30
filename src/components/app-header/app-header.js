import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderButtons from "./components/header-buttons";
import HeaderMiddle from "./components/header-middle";
import HeaderBack from "./components/header-back";

const AppHeader = ({
  // eslint-disable-line
  leftButtons,
  rightButtons,
  renderMiddle,
  ...others
}) => (
  <HeaderContainer {...others}>
    {leftButtons.length ? (
      // eslint-disable-line
      <HeaderButtons buttons={leftButtons} style={{ left: 0 }} />
    ) : null}
    <HeaderMiddle renderMiddle={renderMiddle} />
    {rightButtons.length ? (
      // eslint-disable-line
      <HeaderButtons buttons={rightButtons} style={{ right: 0 }} />
    ) : null}
  </HeaderContainer>
);

AppHeader.defaultProps = {
  leftButtons: [],
  rightButtons: [],
  renderMiddle: undefined
};

AppHeader.propTypes = {
  leftButtons: PropTypes.array, // eslint-disable-line
  rightButtons: PropTypes.array, // eslint-disable-line
  renderMiddle: PropTypes.func
};

export default HeaderBack(AppHeader);
