import React from "react";
import PropTypes from "prop-types";
import { RNCamera } from "react-native-camera";
import { withRouter } from "react-router";
import qrRegex from "./utils/qr-regex";

// https://github.com/react-native-community/react-native-camera/blob/master/docs/RNCamera.md

const ScanQrCamera = ({ history, hideAppModal, ...others }) => {
  const { BarcodeType } = RNCamera.Constants.GoogleVisionBarcodeDetection;
  return (
    <RNCamera
      {...others}
      googleVisionBarcodeType={BarcodeType.QR_CODE}
      onGoogleVisionBarcodesDetected={({ barcodes }) => {
        if (!barcodes || !barcodes.length) return;
        const { data: qrData } = barcodes[0];
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
