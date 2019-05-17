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
        style={{ ...style, objectFit, opacity: +isShowed, background: "#000" }}
        onLoadStart={() => this.setState({ isShowed: false })}
        onCanPlay={() => this.setState({ isShowed: true })}
        controls
      >
        <source src={src} />
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
  objectFit: PropTypes.oneOf(["cover", "contain"]),
  src: PropTypes.string.isRequired
};

export default Video;
