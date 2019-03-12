import React from "react";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native";
import { RNCamera } from "react-native-camera";
import ScanQrCamera from "./components/scan-qr-camera";
import Container from "../../../../components/container";
import { windowDimensions } from "../../../../configurations/window";

class DiscoveryScanQr extends React.Component {
  constructor(props) {
    super(props);
    const { setAppModalHeaderText } = props;
    setAppModalHeaderText({ headerText: "QR Code" });
    this.toggleFlashMode = this.toggleFlashMode.bind(this);
    this.state = { isFlashModeOn: false };
  }

  toggleFlashMode() {
    const { isFlashModeOn } = this.state;
    this.setState({ isFlashModeOn: !isFlashModeOn });
  }

  render() {
    const { hideAppModal } = this.props;
    const { isFlashModeOn } = this.state;
    const { FlashMode } = RNCamera.Constants;
    const modalWidth = windowDimensions.width;
    const modalHeight = windowDimensions.height - 75;
    return (
      <ScanQrCamera
        style={{ flex: 1 }}
        flashMode={isFlashModeOn ? FlashMode.torch : FlashMode.on}
        hideAppModal={hideAppModal}
        captureAudio={false}
      >
        {() => (
          <TouchableWithoutFeedback style={{ flex: 1 }} onPress={this.toggleFlashMode}>
            <Container
              style={{
                position: "absolute",
                left: -modalWidth / 2 + (modalWidth - 200) / 2,
                top: -modalHeight / 2 + (modalHeight - 200) / 2,
                right: -modalWidth / 2 + (modalWidth - 200) / 2,
                bottom: -modalHeight / 2 + (modalHeight - 200) / 2,
                borderLeftWidth: modalWidth / 2,
                borderTopWidth: modalHeight / 2,
                borderRightWidth: modalWidth / 2,
                borderBottomWidth: modalHeight / 2,
                borderColor: "rgba(0, 0, 0, 0.25)",
                backgroundColor: "transparent"
              }}
            />
          </TouchableWithoutFeedback>
        )}
      </ScanQrCamera>
    );
  }
}

DiscoveryScanQr.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired,
  hideAppModal: PropTypes.func.isRequired
};

export default DiscoveryScanQr;
