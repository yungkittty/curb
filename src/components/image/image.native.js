import React from "react";
import FastImage from "react-native-fast-image";
import PropTypes from "prop-types";

// https://www.npmjs.com/package/react-native-fast-image

class _Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
  }

  render() {
    const { isShowed } = this.state;
    const { src, style, ...others } = this.props;
    return (
      <FastImage
        {...others}
        source={{
          uri: src,
          cache: "web"
        }}
        onLoadStart={() => this.setState({ isShowed: false })}
        onLoad={() => this.setState({ isShowed: true })}
        style={[style, { opacity: +isShowed }]}
      />
    );
  }
}

_Image.defaultProps = { style: undefined };

_Image.propTypes = {
  // eslint-disable-next-line
  src: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default _Image;
