import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ListFlat from "../../components/list-flat";
import GroupListHeader from "./components/group-list-header";
import GroupListItemHeader from "./components/group-list-item-header";
import GroupListItemMedia from "./components/group-list-item-media";
import GroupListItemInfo from "./components/group-list-item-info";
import ButtonFloat from "../../components/button-float";
import withAppModal from "../../hocs/with-app-modal";
import withCurrentUser from "../../hocs/with-current-user";
import withGroup from "../../hocs/with-group";

/* eslint-disable */

import CreateMedia from "../create-media"; /** @TODO !! */
import GroupSettings from "./scenes/group-settings";

/* eslint-enable */

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFeed = this.toggleFeed.bind(this);
    this.toggleSticky = this.toggleSticky.bind(this);
    this.renderListHeader = this.renderListHeader.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
    this.renderListItemHeader = this.renderListItemHeader.bind(this);
    this.renderListItemMedia = this.renderListItemMedia.bind(this);
    this.renderListItemInfo = this.renderListItemInfo.bind(this);
    this.state = { isFeed: true, isSticky: false };
  }

  // eslint-disable-next-line
  toggleFeed() {
    const { isFeed } = this.state;
    this.setState({ isFeed: !isFeed });
  }

  toggleSticky(event) {
    const { contentOffset } = event.nativeEvent;
    const { isSticky } = this.state;
    if ((contentOffset.y !== 0) !== isSticky) {
      this.setState({ isSticky: !isSticky });
    }
  }

  getData() {
    const { isFeed } = this.state;
    const { groupMediasId } = this.props;
    return [{}, ...(isFeed ? groupMediasId : [{}])];
  }

  getGroupGradient() {
    const { groupTheme, theme } = this.props;
    const groupGradientAngle = 90;
    const groupGradientColorsFirst = theme[`group${_.capitalize(groupTheme)}VariantColor`] || "transparent";
    const groupGradientColorsSecond = theme[`group${_.capitalize(groupTheme)}Color`] || "transparent";
    const groupGradientColors = [groupGradientColorsFirst, groupGradientColorsSecond];
    return { groupGradientAngle, groupGradientColors };
  }

  renderListHeader() {
    const { isFeed, isSticky } = this.state;
    const { showAppModal } = this.props;
    const { groupGradientAngle, groupGradientColors } = this.getGroupGradient();
    return (
      <GroupListHeader
        // eslint-disable-line
        isFeed={isFeed}
        isShadowShowed={isSticky}
        toggleFeed={this.toggleFeed}
        showAppModal={showAppModal}
        groupGradientAngle={groupGradientAngle}
        groupGradientColors={groupGradientColors}
      />
    );
  }

  renderListItemHeader() {
    const {
      // eslint-disable-line
      groupId,
      groupCreatorId,
      groupName,
      groupCategory,
      groupDescription,
      groupStatus,
      currentUserId,
      currentUserGroupsId
    } = this.props;
    const {
      // eslint-disable-line
      groupGradientAngle,
      groupGradientColors
    } = this.getGroupGradient();
    return (
      <GroupListItemHeader
        // eslint-disable-line
        groupId={groupId}
        groupCreatorId={groupCreatorId}
        groupName={groupName}
        groupCategory={groupCategory}
        groupDescription={groupDescription}
        groupStatus={groupStatus}
        groupGradientAngle={groupGradientAngle}
        groupGradientColors={groupGradientColors}
        currentUserId={currentUserId}
        currentUserGroupsId={currentUserGroupsId}
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

  renderListItem(itemData) {
    const { isFeed } = this.state;
    const { index: itemIndex } = itemData;
    if (!itemIndex) {
      /* eslint-disable */
      return this.renderListItemHeader(itemData);
    } else if (isFeed) {
      return this.renderListItemMedia(itemData);
    } else {
      return this.renderListItemInfo(itemData);
      /* eslint-enable */
    }
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
      currentUserId,
      currentUserGroupsId
    } = this.props;
    const isCurrentUser = !!currentUserId;
    const isCurrentUserIn = _.includes(currentUserGroupsId, groupId);
    const isCurrentUserCreator = _.isEqual(currentUserId, groupCreatorId);
    const isButtonFloatShowed = isCurrentUser && ((isFeed && isCurrentUserIn) || isCurrentUserCreator);
    return (
      <React.Fragment>
        <ListFlat
          // eslint-disable-line
          data={this.getData()}
          keyExtractor={(itemId, itemIndex) => (_.isString(itemId) ? itemId : itemIndex.toString())}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={this.renderListHeader}
          renderItem={this.renderListItem}
          scrollEventThrottle={1}
          onScroll={this.toggleSticky}
        />
        {isButtonFloatShowed ? (
          <ButtonFloat
            // eslint-disable-line
            icon={isFeed ? "plus" : "sliders-h"}
            onClick={() => showAppModal({ scene: isFeed ? CreateMedia : GroupSettings })}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

Group.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  groupCreatorId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupDescription: PropTypes.string.isRequired,
  groupCategory: PropTypes.string.isRequired,
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
