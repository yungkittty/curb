import React from "react";
import PropTypes from "prop-types";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
  }

  render() {
    const { isShowed } = this.state;
    const { style, objectFit, src, ...others } = this.props;
    return (
      // eslint-disable-next-line
      <video
        {...others}
        style={{ ...style, opacity: +isShowed }}
        controls
        onLoadStart={() => this.setState({ isShowed: false })}
        onCanPlay={() => this.setState({ isShowed: true })}
      >
        <source style={{ objectFit }} src={src} />
      </video>
    );
  }
}

Video.defaultProps = {
  style: undefined,
  objectFit: undefined
};

Video.propTypes = {
  style: PropTypes.object, // eslint-disable-line
  objectFit: PropTypes.oneOf(["cover"]),
  src: PropTypes.string.isRequired
};

export default Video;
