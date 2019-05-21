import { connect } from "react-redux";
/* eslint-disable-next-line */
import CreateMediaText from "./create-media-text";
import { mediasActions, mediasSelectors } from "../../../../datas/medias";

const mapStateToProps = state => ({
  isFetchingMedias: mediasSelectors.isFetchingMedias(state) || false
});

const mapDispatchToProps = dispatch => ({
  postMediaText: payload => dispatch(mediasActions.postMediaTextRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMediaText);
