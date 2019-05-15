import { connect } from "react-redux";
// eslint-disable-next-line
import CreateMediaVideo from "./create-media-video";
import { mediasActions, mediasSelectors } from "../../../../datas/medias";

const mapStateToProps = state => ({
  isFetchingMedias: mediasSelectors.isFetchingMedias(state) || false,
  mediasErrorCode: mediasSelectors.getMediasErrorCode(state) || ""
});

const mapDispatchToProps = dispatch => ({
  postMediaVideo: payload => dispatch(mediasActions.postMediaVideoRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMediaVideo);
