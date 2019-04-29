import React, { Component } from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";

// eslint-disable-next-line
const _Image = ({
  src: uri,
  isAppLoaded,
  addLoadingImage,
  addLoadedImage,
  onLoadStart,
  onLoad,
  onError,
  ...others
}) => (
  <Image
    {...others}
    // eslint-disable-next-line
    source={isNaN(uri) ? { uri } : uri}
    onLoadStart={() => {
      if (onLoadStart) onLoadStart();
      // eslint-disable-next-line
      if (!isAppLoaded && isNaN(uri)) addLoadingImage();
    }}
    onLoad={() => {
      if (onLoad) onLoad();
      // eslint-disable-next-line
      if (!isAppLoaded && isNaN(uri)) addLoadedImage();
    }}
    onError={() => {
      if (onError) onError();
      // eslint-disable-next-line
      if (!isAppLoaded && isNaN(uri)) addLoadedImage();
    }}
  />
);

_Image.defaultProps = {
  onLoadStart: undefined,
  onLoad: undefined,
  onError: undefined
};

_Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isAppLoaded: PropTypes.bool.isRequired,
  addLoadingImage: PropTypes.func.isRequired,
  addLoadedImage: PropTypes.func.isRequired,
  onLoadStart: PropTypes.func,
  onLoad: PropTypes.func,
  onError: PropTypes.func
};

export default _Image;
