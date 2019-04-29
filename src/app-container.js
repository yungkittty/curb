import { connect } from "react-redux";
import App from "./app";
import { appLoadingSelectors } from "./datas/app-loading";

const mapStateToProps = state => ({
  // eslint-disable-next-line
  isAppLoaded: appLoadingSelectors.isAppLoaded(state) || false
});

export default connect(
  mapStateToProps,
  null
)(App);
