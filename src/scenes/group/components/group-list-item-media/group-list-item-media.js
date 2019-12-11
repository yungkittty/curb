import React from "react";
import PropTypes from "prop-types";
import MediaHeaderContainer from "./components/media-header-container";
import MediaHeaderText from "./components/media-header-text";
import GroupCardContainer from "../group-card-container";
import GroupCardLoadingOverlay from "../group-card-loading-overlay";
import Icon from "../../../../components/icon";
import withPost from "../../../../hocs/with-post";
import shortNumberFormatter from "../../../../utils/short-number-formatter";
import { platformBools } from "../../../../configurations/platform";

class GroupListItemMedia extends React.Component {
  constructor(props) {
    super(props);

    this.onPin = this.onPin.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onReport = this.onReport.bind(this);
    this.onLike = this.onLike.bind(this);
    this.getCardMenuOptions = this.getCardMenuOptions.bind(this);
    this.getHeaderComponent = this.getHeaderComponent.bind(this);
  }

  onPin() {
    const { postPinPost, postId, isPinned } = this.props;
    postPinPost({ id: postId, isPinned });
  }

  onDelete() {
    const { deletePost, postId } = this.props;
    deletePost({ id: postId });
  }

  onReport() {
    const { postReportPost, postId } = this.props;
    postReportPost({ id: postId });
  }

  onLike() {
    const { postLikePost, postId, currentUserId } = this.props;
    postLikePost({ id: postId, currentUserId });
  }

  getCardMenuOptions() {
    const { t, isPinned, currentUserId, groupCreatorId, postCreatorId } = this.props;
    const cardMenu = [];
    if (currentUserId === groupCreatorId)
      cardMenu.push({ text: t(isPinned ? "unpin" : "pin"), icon: "thumbtack", onClick: this.onPin });
    if (currentUserId === postCreatorId || currentUserId === groupCreatorId)
      cardMenu.push({ text: t("delete"), icon: "trash", onClick: this.onDelete });
    else cardMenu.push({ text: t("report"), icon: "flag", onClick: this.onReport });
    return cardMenu;
  }

  getHeaderComponent() {
    const { t, isPinned, groupThemeColor } = this.props;
    return isPinned ? (
      <MediaHeaderContainer color={groupThemeColor}>
        <Icon size="extra-small" icon="thumbtack" color={groupThemeColor} />
        <MediaHeaderText
          type={platformBools.isWeb ? "h4" : undefined}
          weight={600}
          style={{ color: groupThemeColor }}
        >
          {t("pinnedPost")}
        </MediaHeaderText>
      </MediaHeaderContainer>
    ) : null;
  }

  render() {
    const {
      theme,
      postCreatorId,
      groupThemeColor,
      postReactionsNumber,
      isCurrentUserLiked,
      currentUserId,
      isPostLoading,
      ...others
    } = this.props;
    return (
      <GroupCardContainer
        {...others}
        HeaderComponent={this.getHeaderComponent()}
        OverlayComponent={isPostLoading && <GroupCardLoadingOverlay />}
        userId={postCreatorId}
        cardMenu={this.getCardMenuOptions()}
        onFloatingButtonClick={!isPostLoading ? this.onLike : undefined}
        floatingButtonColor={isCurrentUserLiked ? groupThemeColor : theme.primaryColor}
        floatingButtonDisabled={!currentUserId}
        likeNumber={shortNumberFormatter(postReactionsNumber, 1, true)}
        moduleComponentProps={{ groupThemeColor }}
      />
    );
  }
}

GroupListItemMedia.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  postId: PropTypes.string.isRequired,
  postPinPost: PropTypes.func.isRequired,
  postReportPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  postLikePost: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  groupCreatorId: PropTypes.string.isRequired,
  postCreatorId: PropTypes.string.isRequired,
  groupThemeColor: PropTypes.string.isRequired,
  postReactionsNumber: PropTypes.number.isRequired,
  isCurrentUserLiked: PropTypes.bool.isRequired,
  isPinned: PropTypes.bool.isRequired,
  isPostLoading: PropTypes.bool.isRequired
};

export default withPost(GroupListItemMedia);
