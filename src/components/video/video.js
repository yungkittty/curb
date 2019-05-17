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
        src={src[0] === "/" ? `${process.env.REACT_APP_API_URL}${src}` : src}
        onLoadStart={() => this.setState({ isShowed: false })}
        onCanPlay={() => this.setState({ isShowed: true })}
        style={{ ...style, objectFit, opacity: +isShowed, background: "#000000" }}
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
  src: PropTypes.string.isRequired,
  style: PropTypes.object, // eslint-disable-line
  objectFit: PropTypes.oneOf(["cover", "contain"])
};

export default Video;
