import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import AppHeader from "../../../../components/app-header";
import ContainerGradient from "../../../../components/container-gradient";
import withShadow from "../../../../hocs/with-shadow";

/* eslint-disable */

import GroupQr from "../../scenes/group-qr";

/* eslint-enable */

class GroupListHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onBackClick = this.onBackClick.bind(this);
  }

  // eslint-disable-next-line
  getLeftButtons() {
    const leftButtons = [];
    const leftButtonsFirstIcon = "arrow-left";
    const leftButtonsFirstOnClick = this.onBackClick;
    leftButtons[0] = { icon: leftButtonsFirstIcon, color: "white", onClick: leftButtonsFirstOnClick };
    return leftButtons;
  }

  getRightButtons() {
    const { isFeed, toggleFeed, showAppModal } = this.props;
    const rightButtons = [];
    const rightButtonsFirstIcon = "qrcode";
    const rightButtonsFirstOnClick = () => showAppModal({ scene: GroupQr });
    const rightButtonsSecondIcon = isFeed ? "info-circle" : "stream";
    const rightButtonsSecondOnClick = toggleFeed;
    rightButtons[0] = { icon: rightButtonsFirstIcon, color: "white", onClick: rightButtonsFirstOnClick };
    rightButtons[1] = { icon: rightButtonsSecondIcon, color: "white", onClick: rightButtonsSecondOnClick };
    return rightButtons;
  }

  onBackClick() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const {
      // eslint-disable-line
      groupGradientAngle,
      groupGradientColors,
      ...others
    } = this.props;
    return (
      <AppHeader
        // eslint-disable-line
        {...others}
        as={ContainerGradient}
        leftButtons={this.getLeftButtons()}
        rightButtons={this.getRightButtons()}
        gradientAngle={groupGradientAngle}
        gradientColors={groupGradientColors}
        onBackClick={this.onBackClick}
      />
    );
  }
}

GroupListHeader.propTypes = {
  isFeed: PropTypes.bool.isRequired,
  toggleFeed: PropTypes.func.isRequired,
  showAppModal: PropTypes.func.isRequired,
  groupGradientAngle: PropTypes.number.isRequired,
  groupGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  history: PropTypes.object.isRequired // eslint-disable-line
};

export default _.flowRight([
  // eslint-disable-line
  withShadow(4),
  withRouter
])(GroupListHeader);
