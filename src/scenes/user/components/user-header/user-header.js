import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import AppHeader from "../../../../components/app-header";
import { platformBools } from "../../../../configurations/platform";

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onBackClick = this.onBackClick.bind(this);
  }

  // eslint-disable-next-line
  getLeftButtons() {
    const { theme } = this.props;
    const leftButtonsFirstIcon = "arrow-left";
    const leftButtonsFirstColor = theme.primaryColor;
    const leftButtonsFirstOnClick = this.onBackClick;
    return [{
      icon: leftButtonsFirstIcon,
      color: leftButtonsFirstColor,
      onClick: leftButtonsFirstOnClick
    }];
  }

  onBackClick() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    return (
      <AppHeader
        // eslint-disable-line
        leftButtons={this.getLeftButtons()}
        onBackClick={this.onBackClick}
        style={{ marginBottom: platformBools.isWeb ? 40 : 30 }}
      />
    );
  }
}

UserHeader.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withRouter(UserHeader);
