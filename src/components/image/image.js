import React, { Component } from "react";
import PropTypes from "prop-types";

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { src, isAppLoaded, addLoadingImage } = this.props;
    if (!isAppLoaded && !src.startsWith("/static")) addLoadingImage();
  }

  componentDidUpdate() {
    const { src, isAppLoaded, addLoadingImage } = this.props;
    if (!isAppLoaded && !src.startsWith("/static")) addLoadingImage();
  }

  render() {
    const {
      src,
      isAppLoaded,
      addLoadingImage,
      addLoadedImage,
      onLoadStart,
      onLoad,
      onError,
      ...others
    } = this.props;
    return (
      <img
        {...others}
        src={src}
        alt=""
        onLoad={() => {
          if (onLoad) onLoad();
          if (!isAppLoaded && !src.startsWith("/static")) addLoadedImage();
        }}
        onError={() => {
          if (onError) onError();
          if (!isAppLoaded && !src.startsWith("/static")) addLoadedImage();
        }}
      />
    );
  }
}

Image.defaultProps = {
  onLoadStart: undefined,
  onLoad: undefined,
  onError: undefined
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  isAppLoaded: PropTypes.bool.isRequired,
  addLoadingImage: PropTypes.func.isRequired,
  addLoadedImage: PropTypes.func.isRequired,
  onLoadStart: PropTypes.func,
  onLoad: PropTypes.func,
  onError: PropTypes.func
};

export default Image;
