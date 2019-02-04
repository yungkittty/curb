import { connect } from "react-redux";
import { currentUserSelectors } from "./datas/current-user";
import App from "./app";

const mapStateToProps = state => ({ currentUserToken: currentUserSelectors.getCurrentUserToken(state) });

export default connect(mapStateToProps)(App);
