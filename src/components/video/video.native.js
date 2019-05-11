import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "react-native-video-controls";

// https://www.npmjs.com/package/react-native-video

class _Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: true };

    this.videoPlayer = React.createRef();
  }

  render() {
    const { isShowed } = this.state;
    const { src: uri, objectFit, style, ...others } = this.props;
    return (
      <VideoPlayer
        {...others}
        ref={this.videoPlayer}
        source={{ uri }}
        resizeMode={objectFit}
        toggleResizeModeOnFullscreen={false}
        onLoadStart={() => this.setState({ isShowed: false })}
        onLoad={() => this.setState({ isShowed: true })}
        style={[style, { opacity: +isShowed }]}
        controlTimeout={4000}
        disableBack
        disableVolume
        disableFullscreen
        paused
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
  style: PropTypes.object, // eslint-disable-line
  objectFit: PropTypes.oneOf(["cover", "contain"])
};

export default _Video;
