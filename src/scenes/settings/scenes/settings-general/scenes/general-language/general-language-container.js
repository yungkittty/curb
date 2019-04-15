import { connect } from "react-redux";
/* eslint-disable-next-line */
import GeneralLanguage from "./general-language";
import { appModalActions } from "../../../../../../datas/app-modal";
import { currentSettingsActions } from "../../../../../../datas/current-settings";

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload => dispatch(appModalActions.setAppModalHeaderText(payload)),
  setAppModalHeaderLeftButton: payload => dispatch(appModalActions.setAppModalHeaderLeftButton(payload)),
  setAppModalScene: payload => dispatch(appModalActions.setAppModalScene(payload)),
  setCurrentSettingsLanguage: payload => dispatch(currentSettingsActions.setCurrentSettingsLanguage(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(GeneralLanguage);
