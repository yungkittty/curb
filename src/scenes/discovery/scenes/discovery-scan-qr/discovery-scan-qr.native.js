import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native";
import { RNCamera } from "react-native-camera";
import { withTheme } from "styled-components";
import Container from "../../../../components/container";
import Icon from "../../../../components/icon";
import ScanQrCamera from "./components/scan-qr-camera";
import ScanQrCorner from "./components/scan-qr-corner";
import { windowDimensions } from "../../../../configurations/window";
import withAppModal from "../../../../hocs/with-app-modal";

class DiscoveryScanQr extends React.Component {
  constructor(props) {
    super(props);
    const { setAppModalHeaderText } = props;
    setAppModalHeaderText({ text: "QR Code" });
    this.toggleFlashMode = this.toggleFlashMode.bind(this);
    this.state = { isFlashModeOn: false };
  }

  toggleFlashMode() {
    const { isFlashModeOn } = this.state;
    this.setState({ isFlashModeOn: !isFlashModeOn });
  }

  render() {
    const { hideAppModal, theme } = this.props;
    const { isFlashModeOn } = this.state;
    const { FlashMode } = RNCamera.Constants;
    const modalWidth = windowDimensions.getWidth();
    const modalHeight = windowDimensions.getHeight() - windowDimensions.getStatusBarHeight() - 75;
    const modalWidthOffset = (modalWidth - 250) / 2;
    const modalHeightOffset = (modalHeight - 250) / 2;
    return (
      <ScanQrCamera
        style={{ flex: 1 }}
        flashMode={isFlashModeOn ? FlashMode.torch : FlashMode.on}
        hideAppModal={hideAppModal}
        captureAudio={false}
      >
        {() => (
          <TouchableWithoutFeedback style={{ flex: 1 }} onPress={this.toggleFlashMode}>
            <Container style={{ flex: 1 }}>
              <ScanQrCorner
                style={{
                  left: modalWidthOffset,
                  top: modalHeightOffset,
                  borderLeftWidth: 2.5,
                  borderTopWidth: 2.5
                }}
              />
              <ScanQrCorner
                style={{
                  top: modalHeightOffset,
                  right: modalWidthOffset,
                  borderTopWidth: 2.5,
                  borderRightWidth: 2.5
                }}
              />
              <Container
                style={{
                  position: "absolute",
                  left: -modalWidth / 2 + modalWidthOffset,
                  top: -modalHeight / 2 + modalHeightOffset,
                  right: -modalWidth / 2 + modalWidthOffset,
                  bottom: -modalHeight / 2 + modalHeightOffset,
                  borderLeftWidth: modalWidth / 2,
                  borderTopWidth: modalHeight / 2,
                  borderRightWidth: modalWidth / 2,
                  borderBottomWidth: modalHeight / 2,
                  borderColor: theme.overlayColor,
                  backgroundColor: "transparent"
                }}
              />
              <Icon
                icon="bolt"
                size="small"
                color={theme.primaryColor}
                style={{
                  position: "absolute",
                  left: modalWidth / 2 - 10,
                  bottom: modalHeightOffset / 2 - 10,
                  opacity: isFlashModeOn ? 1 : 0.5
                }}
              />
              <ScanQrCorner
                style={{
                  right: modalWidthOffset,
                  bottom: modalHeightOffset,
                  borderRightWidth: 2.5,
                  borderBottomWidth: 2.5
                }}
              />
              <ScanQrCorner
                style={{
                  bottom: modalHeightOffset,
                  left: modalWidthOffset,
                  borderBottomWidth: 2.5,
                  borderLeftWidth: 2.5
                }}
              />
            </Container>
          </TouchableWithoutFeedback>
        )}
      </ScanQrCamera>
    );
  }
}

DiscoveryScanQr.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired,
  hideAppModal: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTheme
])(DiscoveryScanQr);
