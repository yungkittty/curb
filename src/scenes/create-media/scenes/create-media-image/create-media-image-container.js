import { connect } from "react-redux";
// eslint-disable-next-line
import CreateMediaImage from "./create-media-image";
import currentUserSelectors from "../../../../datas/current-user/current-user-selectors";
import { mediasActions, mediasSelectors } from "../../../../datas/medias";

const mapStateToProps = state => ({
  currentUserId: currentUserSelectors.getCurrentUserId(state) || "",
  isFetchingMedias: mediasSelectors.isFetchingMedias(state) || false,
  mediasErrorCode: mediasSelectors.getMediasErrorCode(state) || ""
});

const mapDispatchToProps = dispatch => ({
  postGroupImageContent: payload => dispatch(mediasActions.postGroupImageContentRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMediaImage);
