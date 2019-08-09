import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { RNCamera } from "react-native-camera";
import { withRouter } from "react-router";

// https://github.com/react-native-community/react-native-camera/blob/master/docs/RNCamera.md

const ScanQrCamera = ({ history, hideAppModal, ...others }) => {
  const { BarCodeType } = RNCamera.Constants;
  return (
    <RNCamera
      {...others}
      barCodeTypes={[BarCodeType.qr]}
      onBarCodeRead={qrCode => {
        try {
          const { data: qrCodeData } = qrCode;
          if (!qrCodeData) return;
          const { id: groupId, inviteToken: groupInviteToken } = JSON.parse(qrCodeData);
          if (!groupId || !_.isString(groupId)) return;
          if (!_.isString(groupInviteToken)) return;
          history.replace(`/groups/${groupId}`, { inviteToken: groupInviteToken });
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
