import React from "react";
import PropTypes from "prop-types";
import { RNCamera } from "react-native-camera";
import { withRouter } from "react-router";
import qrRegex from "./utils/qr-regex";

// https://github.com/react-native-community/react-native-camera/blob/master/docs/RNCamera.md

const ScanQrCamera = ({ history, hideAppModal, ...others }) => {
  const { BarCodeType } = RNCamera.Constants;
  return (
    <RNCamera
      {...others}
      barCodeTypes={[BarCodeType.qr]}
      onBarCodeRead={({ data: qrData }) => {
        if (!RegExp(qrRegex).test(qrData)) return;
        history.replace(`/groups/${qrData}`);
        hideAppModal();
      }}
    />
  );
};

ScanQrCamera.propTypes = {
  history: PropTypes.shape({ replace: PropTypes.func.isRequired }).isRequired,
  hideAppModal: PropTypes.func.isRequired
};

export default withRouter(ScanQrCamera);
