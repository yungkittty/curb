import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import AppHeader from "../../../../components/app-header";
import HeaderContainer from "./components/header-container";
import HeaderTitle from "./components/header-title";
import HeaderSubtitle from "./components/header-subtitle";
import { platformBools } from "../../../../configurations/platform";
import withAppModal from "../../../../hocs/with-app-modal";

/* eslint-disable */

import DiscoveryScanQr from "../../scenes/discovery-scan-qr";

/* eslint-enable */

class DiscoveryHeader extends React.Component {
  getRightButtons() {
    const { showAppModal, theme } = this.props;
    if (platformBools.isWeb) return [];
    const rightButtonsFirstIcon = "qrcode";
    const rightButtonsFirstColor = theme.primaryColor;
    const rightButtonsFirstOnClick = () => showAppModal({ scene: DiscoveryScanQr });
    return [
      {
        icon: rightButtonsFirstIcon,
        color: rightButtonsFirstColor,
        onClick: rightButtonsFirstOnClick
      }
    ];
  }

  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <AppHeader rightButtons={this.getRightButtons()} style={{ position: "absolute" }} />
        <HeaderContainer>
          <HeaderTitle type="h1" weight={700}>
            {/* eslint-disable-line */}
            {t("title")}
          </HeaderTitle>
          <HeaderSubtitle type="h4">
            {/* eslint-disable-line */}
            {t("subtitle")}
          </HeaderSubtitle>
        </HeaderContainer>
      </React.Fragment>
    );
  }
}

DiscoveryHeader.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTheme
])(DiscoveryHeader);
