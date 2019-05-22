import React from "react";
import PropTypes from "prop-types";
import QrCode from "react-native-qrcode";
import Container from "../container";

// eslint-disable-next-line
const _QrCode = ({ size, ...others }) => (
  <Container style={{ height: size, width: size, overflow: "hidden" }}>
    <QrCode {...others} size={size} />
  </Container>
);

_QrCode.propTypes = {
  size: PropTypes.string.isRequired
};

export default _QrCode;
