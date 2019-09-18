import React from "react";
import PropTypes from "prop-types";
import Video from "react-native-video-controls";
import Container from "../container";

// https://www.npmjs.com/package/react-native-video
// https://www.npmjs.com/package/react-native-video-controls

class _Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
    this.videoRef = React.createRef();
    this.muteVideo = this.muteVideo.bind(this);
  }

  componentDidMount() {
    this.muteVideo();
  }

  componentDidUpdate(prevProps) {
    const { isShowedInCard } = this.props;

    if (prevProps.isShowedInCard === isShowedInCard && !isShowedInCard) this.muteVideo();
  }

  muteVideo() {
    this.videoRef.current.state.volume = 0;
    this.videoRef.current.state.volumePosition = 0;
    this.videoRef.current.state.volumeOffset = 0;
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
          source={{ uri: isVideoFromApi ? `${process.env.REACT_APP_API_URL}${src}` : src }}
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
          resizeMode={objectFit}
          style={{
            width: "100%",
            height: "100%"
          }}
          toggleResizeModeOnFullscreen={false}
          disableBack
          disableFullscreen
          showOnStart={false}
          paused={!isShowedInCard}
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
