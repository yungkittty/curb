import _ from "lodash";
import { connect } from "react-redux";
import Group from "./group";
import { postsActions, postsSelectors } from "../../datas/posts";
import withGroup from "../../hocs/with-group";

const mapStateToProps = (state, ownProps) => ({
  isPostsEnd: postsSelectors.isPostsEnd(state, ownProps.groupId),
  postsId: postsSelectors.getPostsAllIds(state, ownProps.groupId)
});

const mapDispatchToProps = dispatch => ({
  getPosts: payload => dispatch(postsActions.getPostsRequest(payload))
});

export default _.flowRight([
  // eslint-disable-line
  withGroup,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
])(Group);
