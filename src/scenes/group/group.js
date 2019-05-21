import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import GroupList from "./components/group-list";
import GroupListHeader from "./components/group-list-header";
import GroupListSectionHeader from "./components/group-list-section-header";
import GroupListItemInfo from "./components/group-list-item-info";
import GroupListItemMedia from "./components/group-list-item-media";
import ButtonFloat from "../../components/button-float";
import GroupSettings from "./scenes/group-settings";
import withAppModal from "../../hocs/with-app-modal";
import withCurrentUser from "../../hocs/with-current-user";
import withGroup from "../../hocs/with-group";

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.toggleScene = this.toggleScene.bind(this);
    this.renderListHeader = this.renderListHeader.bind(this);
    this.renderListSectionHeader = this.renderListSectionHeader.bind(this);
    this.renderListItemInfo = this.renderListItemInfo.bind(this);
    this.renderListItemMedia = this.renderListItemMedia.bind(this);
    this.state = { isFeed: true };
  }

  componentDidUpdate(prevProps) {
    const { groupId } = this.props;
    if (groupId === prevProps.groupId) return;
    this.setState({ isFeed: true }); // eslint-disable-line
  }

  toggleScene() {
    const { isFeed } = this.state;
    this.setState({ isFeed: !isFeed });
  }

  renderListHeader() {
    const {
      // eslint-disable-line
      isFeed
    } = this.state;
    const {
      isFetchingGroup,
      groupId,
      groupName,
      groupAvatar,
      groupStatus,
      groupTheme,
      currentUserGroupsId,
      theme
    } = this.props;
    return (
      <GroupListHeader
        isFeed={isFeed}
        toggleScene={this.toggleScene}
        isFetchingGroup={isFetchingGroup}
        groupId={groupId}
        groupName={groupName}
        groupAvatar={groupAvatar}
        groupStatus={groupStatus}
        groupTheme={groupTheme}
        currentUserGroupsId={currentUserGroupsId}
        theme={theme}
      />
    );
  }

  renderListSectionHeader() {
    const {
      // eslint-disable-line
      groupId,
      groupStatus,
      groupTheme,
      currentUserId,
      currentUserGroupsId,
      theme
    } = this.props;
    return (
      <GroupListSectionHeader
        groupId={groupId}
        groupStatus={groupStatus}
        groupTheme={groupTheme}
        currentUserId={currentUserId}
        currentUserGroupsId={currentUserGroupsId}
        theme={theme}
      />
    );
  }

  renderListItemInfo() {
    const {
      // eslint-disable-line
      groupUsersId,
      groupMediaTypes,
      theme
    } = this.props;
    return (
      <GroupListItemInfo
        // eslint-disable-line
        groupUsersId={groupUsersId}
        groupMediaTypes={groupMediaTypes}
        theme={theme}
      />
    );
  }

  renderListItemMedia({ item: mediaId }) {
    const { theme } = this.props;
    return (
      <GroupListItemMedia
        // eslint-disable-line
        mediaId={mediaId}
        theme={theme}
      />
    );
  }

  render() {
    const {
      // eslint-disable-line
      isFeed
    } = this.state;
    const {
      // eslint-disable-line
      showAppModal,
      groupId,
      groupCreatorId,
      groupMediasId,
      currentUserId,
      currentUserGroupsId
    } = this.props;
    const isCurrentUserIn = _.includes(currentUserGroupsId, groupId);
    const isCurrentUserCreator = groupCreatorId === currentUserId;
    return (
      <React.Fragment>
        <GroupList
          isFeed={isFeed}
          sections={
            !isFeed
              ? [{ data: [{}], renderItem: this.renderListItemInfo }]
              : [{ data: groupMediasId, renderItem: this.renderListItemMedia }]
          }
          keyExtractor={groupMediaId => groupMediaId}
          ListHeaderComponent={this.renderListHeader}
          renderSectionHeader={this.renderListSectionHeader}
        />
        {isCurrentUserIn && (isFeed || isCurrentUserCreator) ? (
          <ButtonFloat
            // eslint-disable-line
            icon={isFeed ? "plus" : "sliders-h"}
            onClick={() => (isFeed ? undefined : showAppModal({ scene: GroupSettings }))}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

Group.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  isFetchingGroup: PropTypes.bool.isRequired,
  groupId: PropTypes.string.isRequired,
  groupCreatorId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupAvatar: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  groupUsersId: PropTypes.array.isRequired, // eslint-disable-line
  groupMediaTypes: PropTypes.array.isRequired, // eslint-disable-line
  groupMediasId: PropTypes.array.isRequired, // eslint-disable-line
  currentUserId: PropTypes.string.isRequired,
  currentUserGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withGroup,
  withTheme
])(Group);
