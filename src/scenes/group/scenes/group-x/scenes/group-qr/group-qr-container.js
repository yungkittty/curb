import React from "react";
import { connect } from "react-redux";
import GroupQr from "./group-qr";
import { appModalActions } from "../../../../../../datas/app-modal";

class GroupQrContainer extends React.Component {
  componentDidMount() {}

  render() {
    return <GroupQr {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => ({
  setAppModalHeaderText: payload =>
    dispatch(appModalActions.setAppModalHeaderText(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(GroupQrContainer);
