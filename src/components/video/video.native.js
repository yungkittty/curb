import React from "react";
import PropTypes from "prop-types";
import Video from "react-native-video-player";
import Container from "../container";

// https://www.npmjs.com/package/react-native-video
// https://www.npmjs.com/package/react-native-video-player

class _Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false, isMuted: true };
    this.videoRef = React.createRef();
    this.onMuteToggle = this.onMuteToggle.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { isMuted } = this.state;
    const { isShowedInCard } = this.props;
    if (prevProps.isShowedInCard === isShowedInCard) return;
    if (isShowedInCard) {
      this.videoRef.current.resume();
    }
    if (!isShowedInCard) {
      this.videoRef.current.pause();
      if (!isMuted) this.videoRef.current.onMutePress();
    }
  }

  onMuteToggle() {
    const { isMuted } = this.state;
    this.setState({ isMuted: !isMuted });
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
      onCanPlay,
      objectFit,
      style,
      isShowedInCard,
      ...others
    } = this.props;
    const isVideoFromApi = src.substr(0, 9) === "/contents";
    return (
      <Container style={{ ...style, overflow: "hidden", opacity: +isShowed }}>
        {/* eslint-disable-next-line */}
        <Video
          {...others}
          ref={this.videoRef}
          video={{ uri: isVideoFromApi ? `${process.env.REACT_APP_API_URL}${src}` : src }}
          onLoadStart={event => {
            // eslint-disable-next-line
            onLoadStart && onLoadStart(event);
            this.setState({ isShowed: false });
          }}
          onLoad={event => {
            // eslint-disable-next-line
            onCanPlay && onCanPlay(event);
            this.setState({ isShowed: true });
          }}
          customStyles={{
            seekBarProgress: { backgroundColor: "rgba(255, 255, 255, 0.4)" },
            seekBarKnob: { backgroundColor: "white" },
            seekBarBackground: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
            controls: { backgroundColor: "rgba(0, 0, 0, 0.4)" }
          }}
          onMutePress={this.onMuteToggle}
          resizeMode={objectFit}
          defaultMuted
          repeat
          hideControlsOnStart
        />
      </Container>
    );
  }
}

_Video.defaultProps = {
  onLoadStart: undefined,
  onCanPlay: undefined,
  objectFit: undefined,
  style: undefined,
  isShowedInCard: undefined
};

_Video.propTypes = {
  src: PropTypes.string.isRequired,
  onLoadStart: PropTypes.func,
  onCanPlay: PropTypes.func,
  objectFit: PropTypes.oneOf(["cover", "contain"]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isShowedInCard: PropTypes.bool
};

export default _Video;
