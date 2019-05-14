import { connect } from "react-redux";
/* eslint-disable-next-line */
import CreateMediaText from "./create-media-text";
import { currentUserSelectors } from "../../../../datas/current-user";
import { mediasActions, mediasSelectors } from "../../../../datas/medias";

const mapStateToProps = state => ({
  currentUserId: currentUserSelectors.getCurrentUserId(state) || "",
  isFetchingMedias: mediasSelectors.isFetchingMedias(state) || false,
  mediasErrorCode: mediasSelectors.getMediasErrorCode(state) || ""
});

const mapDispatchToProps = dispatch => ({
  postGroupTextContent: payload => dispatch(mediasActions.postGroupTextContentRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMediaText);
