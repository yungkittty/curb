import { connect } from "react-redux";
/* eslint-disable-next-line */
import CreateMediaLocation from "./create-media-location";
import { mediasActions, mediasSelectors } from "../../../../datas/medias";

const mapStateToProps = state => ({
  isFetchingMedias: mediasSelectors.isFetchingMedias(state) || false
});

const mapDispatchToProps = dispatch => ({
  postMediaLocation: payload => dispatch(mediasActions.postMediaLocationRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMediaLocation);
