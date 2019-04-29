import { connect } from "react-redux";
import Image from "./image";
import { appLoadingSelectors, appLoadingActions } from "../../datas/app-loading";

const mapStateToProps = state => ({
  // eslint-disable-next-line
  isAppLoaded: appLoadingSelectors.isAppLoaded(state) || false
});

const mapDispatchToProps = dispatch => ({
  addLoadingImage: payload => dispatch(appLoadingActions.addLoadingImage(payload)),
  addLoadedImage: payload => dispatch(appLoadingActions.addLoadedImage(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
