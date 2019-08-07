import _ from "lodash";
import React from "react";
import { Linking } from "react-native";
import PropTypes from "prop-types";
import { RNCamera } from "react-native-camera";
import { withRouter } from "react-router";

// https://github.com/react-native-community/react-native-camera/blob/master/docs/RNCamera.md

const ScanQrCamera = ({ history, hideAppModal, ...others }) => {
  const { BarcodeType } = RNCamera.Constants.GoogleVisionBarcodeDetection;
  return (
    <RNCamera
      {...others}
      googleVisionBarcodeType={BarcodeType.QR_CODE}
      onGoogleVisionBarcodesDetected={qrCode => {
        try {
          const { barcodes } = qrCode;
          if (!barcodes || !barcodes.length) return;
          const { data: qrCodeData } = barcodes[0];
          if (!qrCodeData) return;
          Linking.openURL(qrCodeData);
          hideAppModal();
        } catch (error) {} // eslint-disable-line
      }}
    />
  );
};

ScanQrCamera.propTypes = {
  history: PropTypes.shape({ replace: PropTypes.func.isRequired }).isRequired,
  hideAppModal: PropTypes.func.isRequired
};

export default withRouter(ScanQrCamera);
