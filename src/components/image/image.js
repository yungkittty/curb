import React from "react";
import PropTypes from "prop-types";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
  }

  render() {
    const { isShowed } = this.state;
    const { style, src, objectFit, ...others } = this.props;
    return (
      <img
        {...others}
        alt=""
        src={src[0] === "/" ? `${process.env.REACT_APP_API_URL}${src}` : src}
        onLoadStart={() => this.setState({ isShowed: false })}
        onLoad={() => this.setState({ isShowed: true })}
        style={{ ...style, objectFit, opacity: +isShowed }}
      />
    );
  }
}

Image.defaultProps = {
  style: undefined,
  objectFit: undefined
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.object, // eslint-disable-line
  objectFit: PropTypes.oneOf(["cover", "contain"])
};

export default Image;
