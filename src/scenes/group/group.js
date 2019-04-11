import React from "react";
import { connect } from "react-redux";
import { appModalActions } from "../../datas/app-modal";
import ButtonIconFloat from "../../components/button-icon-float";
import GroupQr from "../../scenes/group/scenes/group-x/scenes/group-qr";

/** PAS GIT ADD */

const Group = ({ showAppModal }) => (
  <React.Fragment>
    <ButtonIconFloat
      icon="plus"
      onClick={() => showAppModal({ scene: GroupQr })}
    />
  </React.Fragment>
);

const mapDispatchToProps = dispatch => ({
  showAppModal: payload => dispatch(appModalActions.showAppModal(payload))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Group);
