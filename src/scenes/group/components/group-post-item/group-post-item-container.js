import { connect } from "react-redux";
import GroupPostItem from "./group-post-item";
import { postActions, postSelectors } from "../../../../datas/post";

const mapStateToProps = state => {
  const isFetching = postSelectors.isFetchingPost(state);
  return { isPostFetching: isFetching };
};

const mapDispatchToProps = dispatch => ({
  postPost: payload => dispatch(postActions.postPostRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupPostItem);
