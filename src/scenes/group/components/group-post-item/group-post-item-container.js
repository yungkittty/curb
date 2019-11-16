import { connect } from "react-redux";
import GroupPostItem from "./group-post-item";
import { postActions } from "../../../../datas/post";

const mapDispatchToProps = dispatch => ({
  postPost: payload => dispatch(postActions.postPostRequest(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(GroupPostItem);
