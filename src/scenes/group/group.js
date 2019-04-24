import React from "react";
import { connect } from "react-redux";
import ButtonIconFloat from "../../components/button-icon-float";
import { appModalActions } from "../../datas/app-modal";
import X from "./scenes/group-x/scenes/group-qr";

const mapDispatchToProps = dispatch => ({
  showAppModal: payload => dispatch(appModalActions.setAppModalScene(payload))
});

const Group = ({ showAppModal }) => (
  <React.Fragment>
    <ButtonIconFloat icon="plus" onClick={() => showAppModal({ scene: X })} />
  </React.Fragment>
);

export default connect(
  undefined,
  mapDispatchToProps
)(Group);
