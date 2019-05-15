import { connect } from "react-redux";
// eslint-disable-next-line
import CreateMediaImage from "./create-media-image";
import { mediasActions, mediasSelectors } from "../../../../datas/medias";

const mapStateToProps = state => ({
  isFetchingMedias: mediasSelectors.isFetchingMedias(state) || false,
  mediasErrorCode: mediasSelectors.getMediasErrorCode(state) || ""
});

const mapDispatchToProps = dispatch => ({
  postMediaImage: payload => dispatch(mediasActions.postMediaImageRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMediaImage);
