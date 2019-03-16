import React from "react";
import PropTypes from "prop-types";
import QRCode from "react-qr-code";

const QrQr = ({ value, size, bgColor, fgColor, level }) => (
  <QRCode
    value={value}
    size={size}
    bgColor={bgColor}
    fgColor={fgColor}
    level={level}
  />
);

QrQr.defaultProps = {
  size: 128,
  bgColor: "#FFFFFF",
  fgColor: "#000000",
  level: "L"
};

QrQr.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.number,
  bgColor: PropTypes.string,
  fgColor: PropTypes.string,
  level: PropTypes.string
};

export default QrQr;
