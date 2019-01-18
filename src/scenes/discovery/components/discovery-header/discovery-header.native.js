import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import HeaderContainer from "./components/header-container";
import HeaderButtonIcon from "./components/header-button-icon";

const DiscoveryHeader = ({ theme, children }) => (
  <HeaderContainer>
    <HeaderButtonIcon
      icon="qrcode"
      size="medium"
      color={theme.primaryColor}
      onClick={() => undefined}
    />
    {children}
  </HeaderContainer>
);

DiscoveryHeader.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withTheme(DiscoveryHeader);
