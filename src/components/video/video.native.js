import React from "react";
import PropTypes from "prop-types";
import Video from "react-native-video";

// https://www.npmjs.com/package/react-native-video

class _Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
  }

  render() {
    const { isShowed } = this.state;
    const { src: uri, objectFit, style, ...others } = this.props;
    return (
      <Video
        {...others}
        source={{ uri }}
        resizeMode={objectFit}
        onLoadStart={() => this.setState({ isShowed: false })}
        onLoad={() => this.setState({ isShowed: true })}
        style={[style, { opacity: +isShowed }]}
      />
    );
  }
}

_Video.defaultProps = {
  style: undefined,
  objectFit: undefined
};

_Video.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.array, // eslint-disable-line
  objectFit: PropTypes.oneOf(["cover"])
};

export default _Video;
