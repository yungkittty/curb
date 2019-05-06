import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import GroupList from "./components/group-list";
import GroupListHeader from "./components/group-list-header";
import GroupListSectionHeader from "./components/group-list-section-header";
import GroupListItemInfo from "./components/group-list-item-info";
import GroupListItemMedia from "./components/group-list-item-media";
import ButtonIconFloat from "../../components/button-icon-float";
import withCurrentUser from "../../hocs/with-current-user";
import withGroup from "../../hocs/with-group";

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.toggleScene = this.toggleScene.bind(this);
    this.renderItemInfo = this.renderItemInfo.bind(this);
    this.renderItemMedia = this.renderItemMedia.bind(this);
    this.state = { isFeed: true };
  }

  componentDidUpdate(prevProps) {
    const { groupId } = this.props;
    if (groupId === prevProps.groupId) return;
    // eslint-disable-next-line
    this.setState({ isFeed: true });
  }

  toggleScene() {
    const { isFeed } = this.state;
    this.setState({ isFeed: !isFeed });
  }

  renderItemInfo() {
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

  renderItemMedia({ item: mediaId }) {
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
    const { isFeed } = this.state;
    const {
      isFetchingGroup,
      groupId,
      groupName,
      groupAvatar,
      groupStatus,
      groupTheme,
      groupMediasId,
      userId,
      userGroupsId,
      theme
    } = this.props;
    return (
      <React.Fragment>
        <GroupList
          isFeed={isFeed}
          sections={
            !isFeed
              ? [{ data: [{}], renderItem: this.renderItemInfo }]
              : [{ data: groupMediasId, renderItem: this.renderItemMedia }]
          }
          keyExtractor={groupMediaId => groupMediaId}
          ListHeaderComponent={() => (
            <React.Fragment>
              <GroupListHeader
                isFeed={isFeed}
                toggleScene={this.toggleScene}
                isFetchingGroup={isFetchingGroup}
                groupId={groupId}
                groupName={groupName}
                groupAvatar={groupAvatar}
                groupStatus={groupStatus}
                groupTheme={groupTheme}
                userId={userId}
                userGroupsId={userGroupsId}
                theme={theme}
              />
            </React.Fragment>
          )}
          renderSectionHeader={() => (
            <GroupListSectionHeader
              groupId={groupId}
              groupStatus={groupStatus}
              groupTheme={groupTheme}
              userGroupsId={userGroupsId}
              theme={theme}
            />
          )}
        />
        <ButtonIconFloat icon="plus" onClick={() => undefined} />
      </React.Fragment>
    );
  }
}

Group.propTypes = {
  isFetchingGroup: PropTypes.bool.isRequired,
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupAvatar: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  groupUsersId: PropTypes.array.isRequired, // eslint-disable-line
  groupMediaTypes: PropTypes.array.isRequired, // eslint-disable-line
  groupMediasId: PropTypes.array.isRequired, // eslint-disable-line
  userId: PropTypes.string.isRequired,
  userGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default _.flowRight([
  // eslint-disable-line
  withCurrentUser,
  withGroup,
  withTheme
])(Group);
