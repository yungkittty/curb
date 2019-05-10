import { connect } from "react-redux";
// eslint-disable-next-line
import CreateMediaVideo from "./create-media-video";
import currentUserSelectors from "../../../../datas/current-user/current-user-selectors";
import { mediasActions, mediasSelectors } from "../../../../datas/medias";

const mapStateToProps = state => ({
  currentUserId: currentUserSelectors.getCurrentUserId(state) || "",
  isFetchingMedias: mediasSelectors.isFetchingMedias(state) || false,
  mediasErrorCode: mediasSelectors.getMediasErrorCode(state) || ""
});

const mapDispatchToProps = dispatch => ({
  postGroupVideoContent: payload => dispatch(mediasActions.postGroupVideoContentRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMediaVideo);
