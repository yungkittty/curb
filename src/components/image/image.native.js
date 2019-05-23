import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";

class _Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
  }

  render() {
    const {
      // eslint-disable-line
      isShowed
    } = this.state;
    const {
      // eslint-disable-line
      src,
      onLoadStart,
      onLoad,
      objectFit,
      style,
      ...others
    } = this.props;
    const isImageFromApi = src.substr(0, 9) === "/contents";
    return (
      <Image
        {...others}
        source={{ uri: isImageFromApi ? `${process.env.REACT_APP_API_URL}${src}` : src }}
        resizeMode={objectFit}
        onLoadStart={onLoadStartArgs => {
          // eslint-disable-next-line
          onLoadStart && onLoadStart(onLoadStartArgs);
          this.setState({ isShowed: false });
        }}
        onLoad={onLoadArgs => {
          // eslint-disable-next-line
          onLoad && onLoad(onLoadArgs);
          this.setState({ isShowed: true });
        }}
        style={{
          ...(_.isArray(style) ? _.reduce(style, _.extend, {}) : style),
          opacity: +isShowed
        }}
      />
    );
  }
}

_Image.defaultProps = {
  onLoadStart: undefined,
  onLoad: undefined,
  style: undefined,
  objectFit: undefined
};

_Image.propTypes = {
  src: PropTypes.string.isRequired,
  onLoadStart: PropTypes.func,
  onLoad: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  objectFit: PropTypes.oneOf(["cover", "contain"])
};

export default _Image;
