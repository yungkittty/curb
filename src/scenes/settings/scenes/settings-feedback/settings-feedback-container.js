import { connect } from "react-redux";
/* eslint-disable-next-line */
import SettingsFeedback from "./settings-feedback";
import { feedbackActions, feedbackSelectors } from "../../../../datas/feedback";

const mapStateToProps = state => ({
  isFetchingFeedback: feedbackSelectors.isFetchingFeedback(state) || false
});

const mapDispatchToProps = dispatch => ({
  postFeedback: payload => dispatch(feedbackActions.postFeedbackRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsFeedback);
