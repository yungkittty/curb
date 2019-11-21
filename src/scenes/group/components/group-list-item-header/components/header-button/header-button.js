import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { withTranslation } from "react-i18next";
import ButtonContainer from "./components/button-container";
import ButtonText from "./components/button-text";
import Icon from "../../../../../../components/icon";
import withShadow from "../../../../../../hocs/with-shadow";

class HeaderButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {
      // eslint-disable-line
      isCurrentUserIn,
      groupId,
      postGroupJoin,
      postGroupUnjoin,
      location: { state: { inviteToken } = {} }
    } = this.props;
    if (!isCurrentUserIn) {
      postGroupJoin({ id: groupId, token: inviteToken });
    } else {
      postGroupUnjoin({ id: groupId });
    }
  }

  render() {
    const {
      // eslint-disable-line
      isCurrentUser,
      isCurrentUserIn,
      isCurrentUserCreator,
      groupGradientAngle,
      groupGradientColors,
      t,
      ...others
    } = this.props;
    return isCurrentUser && !isCurrentUserCreator ? (
      <ButtonContainer
        // eslint-disable-line
        {...others}
        isCurrentUserIn={isCurrentUserIn}
        groupGradientAngle={groupGradientAngle}
        groupGradientColors={groupGradientColors}
        onClick={this.onClick}
      >
        <ButtonText
          // eslint-disable-line
          isCurrentUserIn={isCurrentUserIn}
          groupGradientColors={groupGradientColors}
          type="h4"
          weight={700}
        >
          {isCurrentUserIn
            ? // eslint-disable-line
              t("headerButtonTextJoined")
            : t("headerButtonTextJoin")}
        </ButtonText>
        {isCurrentUserIn ? (
          <Icon
            // eslint-disable-line
            icon="check"
            size="extra-small"
            color="white"
          />
        ) : null}
      </ButtonContainer>
    ) : null;
  }
}

HeaderButton.propTypes = {
  isCurrentUser: PropTypes.bool.isRequired,
  isCurrentUserIn: PropTypes.bool.isRequired,
  isCurrentUserCreator: PropTypes.bool.isRequired,
  groupId: PropTypes.string.isRequired,
  groupGradientAngle: PropTypes.number.isRequired,
  groupGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  postGroupJoin: PropTypes.func.isRequired,
  postGroupUnjoin: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired, // eslint-disable-line
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withShadow(2),
  withRouter,
  withTranslation("group")
])(HeaderButton);
