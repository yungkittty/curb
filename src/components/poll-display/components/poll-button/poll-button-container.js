import { connect } from "react-redux";
import PollButton from "./poll-button";
import mediasActions from "../../../../datas/medias/medias-actions";

const mapDispatchToProps = dispatch => ({
  pollVote: payload => dispatch(mediasActions.postMediaPollVoteRequest(payload))
});

export default connect(null, mapDispatchToProps)(PollButton);
