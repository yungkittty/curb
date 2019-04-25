import { connect } from "react-redux";
/* eslint-disable-next-line */
import GeneralLanguage from "./general-language";
import { currentSettingsActions } from "../../../../../../datas/current-settings";

const mapDispatchToProps = dispatch => ({
  setCurrentSettingsLanguage: payload => dispatch(currentSettingsActions.setCurrentSettingsLanguage(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(GeneralLanguage);
