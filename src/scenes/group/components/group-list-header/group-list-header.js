import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderButtonIcon from "./components/header-button-icon";
import ImageGroup from "../../../../components/image-group";
import HeaderTitle from "./components/header-title";
import GroupQr from "../../scenes/group-qr";
import { platformBools } from "../../../../configurations/platform";
import withAppModal from "../../../../hocs/with-app-modal";

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
          style={{ right: platformBools.isReact ? 40 : 20 }}
        />
        <HeaderButtonIcon
          icon={isFeed ? "info-circle" : "stream"}
          size="small"
          color={theme.backgroundColor}
          onClick={toggleScene}
          style={{ right: platformBools.isReact ? 95 : 60 }}
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
  showAppModal: PropTypes.func.isRequired,
  isFeed: PropTypes.bool.isRequired,
  toggleScene: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  currentUserGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withAppModal(GroupListHeader);
