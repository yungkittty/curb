import { connect } from "react-redux";
import AppAlert from "./app-alert";
import { appAlertActions, appAlertSelectors } from "../../datas/app-alert";

const mapStateToProps = state => ({
  appAlertList: appAlertSelectors.getAppAlertList(state) || []
});

const mapDispatchToProps = dispatch => ({
  appAlertClearAlert: () => dispatch(appAlertActions.clearAppAlert())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppAlert);
