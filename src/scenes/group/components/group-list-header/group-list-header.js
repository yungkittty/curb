import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderButtonIcon from "./components/header-button-icon";
import ImageGroup from "../../../../components/image-group";
import HeaderTitle from "./components/header-title";
import GroupQr from "../../scenes/group-qr";
import withAppModal from "../../../../hocs/with-app-modal";

const GroupListHeader = ({
  isFeed,
  toggleScene,
  showAppModal,
  userGroupsId,
  groupId,
  groupName,
  groupStatus,
  groupTheme,
  theme
}) => (
  <HeaderContainer groupTheme={groupTheme}>
    {groupStatus === "public" || _.includes(userGroupsId, groupId) ? (
      <React.Fragment>
        <HeaderButtonIcon
          icon="qrcode"
          size="small"
          color={theme.backgroundColor}
          onClick={() => showAppModal({ scene: GroupQr })}
          style={{ right: 40 }}
        />
        <HeaderButtonIcon
          icon={isFeed ? "info-circle" : "stream"}
          size="small"
          color={theme.backgroundColor}
          onClick={toggleScene}
          style={{ right: 95 }}
        />
      </React.Fragment>
    ) : null}
    <ImageGroup
      groupId={groupId}
      size="extra-large"
      placeholderColor={theme[`group${_.capitalize(groupTheme)}VariantColor`] || ""}
    />
    <HeaderTitle type="h1" weight={700}>
      {/* eslint-disable-line */}
      {groupName}
    </HeaderTitle>
  </HeaderContainer>
);

GroupListHeader.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  isFeed: PropTypes.bool.isRequired,
  toggleScene: PropTypes.func.isRequired,
  userGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withAppModal(GroupListHeader);
