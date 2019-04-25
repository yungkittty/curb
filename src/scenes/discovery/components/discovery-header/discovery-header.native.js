import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import HeaderContainer from "./components/header-container";
import HeaderButtonIcon from "./components/header-button-icon";
import DiscoveryScanQr from "../../scenes/discovery-scan-qr";
import withAppModal from "../../../../hocs/with-app-modal";

const DiscoveryHeader = ({ theme, showAppModal, children }) => (
  <HeaderContainer>
    <HeaderButtonIcon
      icon="qrcode"
      size="small"
      color={theme.primaryColor}
      onClick={() => showAppModal({ scene: DiscoveryScanQr })}
    />
    {children}
  </HeaderContainer>
);

DiscoveryHeader.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  showAppModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default _.flow([
  // eslint-disable-line
  withAppModal,
  withTheme
])(DiscoveryHeader);
