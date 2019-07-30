import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import AppHeader from "../../../../components/app-header";
import HeaderContainer from "./components/header-container";

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
    return [
      // eslint-disable-line
      { icon: "arrow-left", color: "white", onClick: this.onBackClick }
    ];
  }

  getRightButtons() {
    const { showAppModal, isFeed, toggleScene } = this.props;
    const rightButtonsFirstIcon = "qrcode";
    const rightButtonsSecondIcon = isFeed ? "info-circle" : "stream";
    const rightButtonsFirstOnClick = () => showAppModal({ scene: GroupQr });
    const rightButtonsSecondOnClick = toggleScene;
    return [
      // eslint-disable-line
      { icon: rightButtonsFirstIcon, color: "white", onClick: rightButtonsFirstOnClick },
      { icon: rightButtonsSecondIcon, color: "white", onClick: rightButtonsSecondOnClick }
    ];
  }

  onBackClick() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { groupTheme } = this.props; // !
    return (
      <React.Fragment>
        <AppHeader
          // eslint-disable-line
          leftButtons={this.getLeftButtons()}
          rightButtons={this.getRightButtons()}
          onBackClick={this.onBackClick}
          backgroundColor="red"
        />
        <HeaderContainer groupTheme={groupTheme}>
          {/* ... */}
          {/* ... */}
        </HeaderContainer>
      </React.Fragment>
    );
  }
}

GroupListHeader.propTypes = {
  isFeed: PropTypes.bool.isRequired,
  toggleScene: PropTypes.func.isRequired,
  showAppModal: PropTypes.func.isRequired,
  // groupId: PropTypes.string.isRequired,
  // groupName: PropTypes.string.isRequired,
  // groupStatus: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  // currentUserGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  // theme: PropTypes.object.isRequired // eslint-disable-line
  history: PropTypes.object.isRequired // eslint-disable-line
};

export default withRouter(GroupListHeader);
