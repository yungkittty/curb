import React from "react";
import PropTypes from "prop-types";
import Video from "react-native-video-player";
import Container from "../container";

// https://www.npmjs.com/package/react-native-video
// https://www.npmjs.com/package/react-native-video-player

class _Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { isShowedInCard } = this.props;
    this.videoRef.current.resume();
  }

  componentDidUpdate() {
    const { isShowedInCard } = this.props;
    if (isShowedInCard) this.videoRef.current.resume();
    if (!isShowedInCard) this.videoRef.current.pause();
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
          resizeMode={objectFit}
          repeat
          defaultMuted
          pauseOnPress
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
