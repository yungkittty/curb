import { connect } from "react-redux";
/* eslint-disable-next-line */
import CreateMediaLocation from "./create-media-location";
import { mediasActions } from "../../../../datas/medias";

const mapDispatchToProps = dispatch => ({
  postMediaLocation: payload => dispatch(mediasActions.postMediaLocationRequest(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(CreateMediaLocation);
