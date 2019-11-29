import React from "react";
import PropTypes from "prop-types";
import Container from "../container";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { autoplay } = this.props;
    if (autoplay) this.videoRef.current.play();
  }

  componentDidUpdate(prevProps) {
    const { isShowedInCard } = this.props;
    if (prevProps.isShowedInCard === isShowedInCard) return;
    if (isShowedInCard) this.videoRef.current.play();
    if (!isShowedInCard) {
      this.videoRef.current.pause();
      this.videoRef.current.volume = 0;
    }
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
      ...others
    } = this.props;
    const isVideoFromApi = src.substr(0, 9) === "/contents";
    return (
      <Container style={{ ...style, overflow: "hidden", opacity: +isShowed }}>
        {/* eslint-disable-next-line */}
        <video
          {...others}
          ref={this.videoRef}
          src={isVideoFromApi ? `${process.env.REACT_APP_API_URL}${src}` : src}
          onLoadStart={event => {
            // eslint-disable-next-line
            onLoadStart && onLoadStart(event);
            this.setState({ isShowed: false });
          }}
          onCanPlay={() => {
            // eslint-disable-next-line
            onCanPlay && onCanPlay(event);
            this.setState({ isShowed: true });
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit,
            backgroundColor: "#000000"
          }}
          muted
          loop
          controls
        >
          <source src={src} />
        </video>
      </Container>
    );
  }
}

Video.defaultProps = {
  onLoadStart: undefined,
  onCanPlay: undefined,
  objectFit: undefined,
  style: undefined,
  isShowedInCard: false,
  autoplay: false
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  onLoadStart: PropTypes.func,
  onCanPlay: PropTypes.func,
  objectFit: PropTypes.oneOf(["cover", "contain"]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isShowedInCard: PropTypes.bool,
  autoplay: PropTypes.bool
};

export default Video;
