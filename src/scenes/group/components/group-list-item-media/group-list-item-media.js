import React from "react";
import PropTypes from "prop-types";
import GroupCardContainer from "../group-card-container";
import withPost from "../../../../hocs/with-post";

class GroupListItemMedia extends React.Component {
  constructor(props) {
    super(props);

    this.onPin = this.onPin.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onReport = this.onReport.bind(this);
    this.onLike = this.onLike.bind(this);
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
    const { postLikePost, postId } = this.props;
    postLikePost({ id: postId });
  }

  render() {
    const { t, currentUserId, groupCreatorId, postCreatorId, ...others } = this.props;
    const cardMenu = [];
    if (currentUserId === groupCreatorId)
      cardMenu.push({ text: t("pin"), icon: "thumbtack", onClick: this.onPin });
    if (currentUserId === postCreatorId || currentUserId === groupCreatorId)
      cardMenu.push({ text: t("delete"), icon: "trash", onClick: this.onDelete });
    else cardMenu.push({ text: t("report"), icon: "flag", onClick: this.onReport });

    return <GroupCardContainer {...others} userId={postCreatorId} cardMenu={cardMenu} />;
  }
}

GroupListItemMedia.propTypes = {
  t: PropTypes.func.isRequired,
  postPinPost: PropTypes.func.isRequired,
  postReportPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  postLikePost: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  groupCreatorId: PropTypes.string.isRequired,
  postCreatorId: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired
};

export default withPost(GroupListItemMedia);
