import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postActions, postSelectors } from "../../datas/post";
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
    if (!post) return;
    const mediaList = setMediaTypesProperties(post.medias);
    const { creatorId: postCreatorId, createdAt: postDateCreation, errorCode: postErrorCode } = post;
    console.log(postDateCreation);
    // eslint-disable-next-line
    return {
      postId,
      postCreatorId,
      postDateCreation,
      postErrorCode,
      mediaList
    };
  };

  const mapDispatchToProps = dispatch => ({
    getPost: payload => dispatch(postActions.getPostRequest(payload))
  });

  WithPost.defaultProps = {
    shouldFetch: true,
    postId: "",
    postCreatorId: "",
    postDateCreation: "",
    mediaList: {},
    postErrorCode: ""
  };

  WithPost.propTypes = {
    shouldFetch: PropTypes.bool,
    postId: PropTypes.string,
    postCreatorId: PropTypes.string,
    postDateCreation: PropTypes.string,
    mediaList: PropTypes.object, // eslint-disable-line
    postErrorCode: PropTypes.string,
    getPost: PropTypes.func.isRequired
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithPost);
};

export default withPost;
