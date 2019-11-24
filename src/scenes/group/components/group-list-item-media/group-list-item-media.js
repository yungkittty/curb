import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import MediaHeaderContainer from "./components/media-header-container";
import MediaHeaderLoader from "./components/media-header-loader";
import MediaHeaderText from "./components/media-header-text";
import GroupCardContainer from "../group-card-container";
import withPost from "../../../../hocs/with-post";
import shortNumberFormatter from "../../../../utils/short-number-formatter";

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
    const { postPinPost, postId } = this.props;
    postPinPost({ id: postId });
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
    const { t, currentUserId, groupCreatorId, postCreatorId } = this.props;
    const cardMenu = [];
    if (currentUserId === groupCreatorId)
      cardMenu.push({ text: t("pin"), icon: "thumbtack", onClick: this.onPin });
    if (currentUserId === postCreatorId || currentUserId === groupCreatorId)
      cardMenu.push({ text: t("delete"), icon: "trash", onClick: this.onDelete });
    else cardMenu.push({ text: t("report"), icon: "flag", onClick: this.onReport });
    return cardMenu;
  }

  getHeaderComponent() {
    const { t, deletingPosts, postId } = this.props;
    return _.includes(deletingPosts, postId) ? (
      <MediaHeaderContainer>
        <MediaHeaderLoader size="extra-extra-small" />
        <MediaHeaderText>{t("deletingPost")}</MediaHeaderText>
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
      ...others
    } = this.props;
    return (
      <GroupCardContainer
        {...others}
        HeaderComponent={this.getHeaderComponent()}
        userId={postCreatorId}
        cardMenu={this.getCardMenuOptions()}
        onFloatingButtonClick={this.onLike}
        floatingButtonColor={isCurrentUserLiked ? groupThemeColor : theme.primaryColor}
        likeNumber={shortNumberFormatter(postReactionsNumber, 1, true)}
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
  deletingPosts: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withPost(GroupListItemMedia);
