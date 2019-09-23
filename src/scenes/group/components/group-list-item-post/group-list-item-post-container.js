import { connect } from "react-redux";
import GroupListItemPost from "./group-list-item-post";
import { postsSelectors } from "../../../../datas/posts";

const mapStateToProps = (state, ownProps) => {
  const {
    // eslint-disable-line
    groupId: postGroupId,
    postId
  } = ownProps;
  const {
    // eslint-disable-line
    creatorId: postCreatorId,
    pinned: isPostPinned,
    reaction: postReactions,
    medias: postMedias
  } = postsSelectors.getPostById(state, postGroupId, postId);
  return {
    // eslint-disable-line
    postId,
    postCreatorId,
    postGroupId,
    postMedias,
    postReactions,
    isPostPinned
  };
};

export default connect(
  // eslint-disable-line
  mapStateToProps
)(GroupListItemPost);
