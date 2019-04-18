import { connect } from "react-redux";
import AppAlert from "./app-alert";
import { appAlertActions, appAlertSelectors } from "../../datas/app-alert";

const mapStateToProps = state => ({
  appAlertList: appAlertSelectors.getAppAlertList(state)
});

const mapDispatchToProps = dispatch => ({
  appAlertPopAlert: () => dispatch(appAlertActions.popAppAlert())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppAlert);
