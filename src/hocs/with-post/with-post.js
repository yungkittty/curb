import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postActions, postSelectors } from "../../datas/post";
import { currentUserSelectors } from "../../datas/current-user";
import setMediaTypesProperties from "./utils/set-media-types-properties";

const withPost = WrappedComponent => {
  class WithPost extends React.Component {
    componentDidMount() {
      const {
        // eslint-disable-line
        shouldFetch,
        postId,
        getPost
      } = this.props;
      if (shouldFetch && postId) {
        getPost({ id: postId });
      }
    }

    componentDidUpdate(prevProps) {
      const {
        // eslint-disable-line
        shouldFetch,
        postId,
        getPost
      } = this.props;
      if (shouldFetch && postId && postId !== prevProps.postId) {
        getPost({ id: postId });
      }
    }

    render() {
      const { getPost, ...others } = this.props;
      return <WrappedComponent {...others} />;
    }
  }

  const mapStateToProps = (state, ownProps) => {
    const postId = ownProps.postId; // eslint-disable-line
    const post = postSelectors.getPostById(state, postId);
    const currentUserId = currentUserSelectors.getCurrentUserId(state);
    if (!post) return { postId };
    const mediaList = setMediaTypesProperties(post.medias);
    const {
      isLoading: isPostLoading,
      creatorId: postCreatorId,
      createdAt: postDateCreation,
      reaction: postReaction,
      errorCode: postErrorCode
    } = post;
    // eslint-disable-next-line
    return {
      postId,
      isPostLoading,
      postCreatorId,
      postDateCreation,
      postReactionsNumber: _.size(postReaction),
      isCurrentUserLiked: _.includes(postReaction, currentUserId),
      postErrorCode,
      mediaList
    };
  };

  const mapDispatchToProps = dispatch => ({
    getPost: payload => dispatch(postActions.getPostRequest(payload)),
    postPinPost: payload => dispatch(postActions.postPinPostRequest(payload)),
    postReportPost: payload => dispatch(postActions.postReportPostRequest(payload)),
    deletePost: payload => dispatch(postActions.deletePostRequest(payload)),
    postLikePost: payload => dispatch(postActions.postLikePostRequest(payload))
  });

  WithPost.defaultProps = {
    shouldFetch: true,
    postId: "",
    isPostLoading: false,
    postCreatorId: "",
    postDateCreation: "",
    postReactionsNumber: 0,
    isCurrentUserLiked: false,
    postErrorCode: "",
    mediaList: {}
  };

  WithPost.propTypes = {
    shouldFetch: PropTypes.bool,
    postId: PropTypes.string,
    isPostLoading: PropTypes.bool,
    postCreatorId: PropTypes.string,
    postDateCreation: PropTypes.string,
    postReactionsNumber: PropTypes.number,
    isCurrentUserLiked: PropTypes.bool,
    postErrorCode: PropTypes.string,
    mediaList: PropTypes.object, // eslint-disable-line
    getPost: PropTypes.func.isRequired
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithPost);
};

export default withPost;
