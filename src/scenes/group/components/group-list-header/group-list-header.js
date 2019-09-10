import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import AppHeader from "../../../../components/app-header";
import ContainerGradient from "../../../../components/container-gradient";
import withShadow from "../../../../hocs/with-shadow";

/* eslint-disable */

import GroupQr from "../../scenes/group-qr";

const GroupListHeader = ({
  isFeed,
  toggleScene,
  showAppModal,
  groupId,
  groupName,
  groupStatus,
  groupTheme,
  currentUserGroupsId,
  theme
}) => (
  <HeaderContainer groupTheme={groupTheme}>
    {groupStatus === "public" || _.includes(currentUserGroupsId, groupId) ? (
      <React.Fragment>
        <HeaderButtonIcon
          icon="qrcode"
          size="small"
          color={theme.backgroundColor}
          onClick={() => showAppModal({ scene: GroupQr })}
          style={{ right: platformBools.isWeb ? 40 : 20 }}
        />
        <HeaderButtonIcon
          icon={isFeed ? "info-circle" : "stream"}
          size="small"
          color={theme.backgroundColor}
          onClick={toggleScene}
          style={{ right: platformBools.isWeb ? 95 : 60 }}
        />
      </React.Fragment>
    ) : null}
    <ImageGroup
      shouldFetch={false}
      groupId={groupId}
      size="extra-extra-large"
      placeholderColor={theme[`group${_.capitalize(groupTheme)}VariantColor`]}
    />
    <HeaderTitle type="h2" weight={700}>
      {/* eslint-disable-line */}
      {groupName}
    </HeaderTitle>
  </HeaderContainer>
);

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
