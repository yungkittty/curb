import { connect } from "react-redux";
import contentEventButton from "./content-event-button";
import mediasActions from "../../../../../../datas/medias/medias-actions";

const mapDispatchToProps = dispatch => ({
  joinEvent: payload => dispatch(mediasActions.postMediaEventJoinRequest(payload))
});

export default connect(null, mapDispatchToProps)(contentEventButton);
