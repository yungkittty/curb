import React from "react";
import PropTypes from "prop-types";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
  }

  render() {
    const { isShowed } = this.state;
    const { style, objectFit, ...others } = this.props;
    return (
      <img
        {...others}
        alt=""
        onLoadStart={() => this.setState({ isShowed: false })}
        onLoad={() => this.setState({ isShowed: true })}
        style={{ ...style, opacity: +isShowed, objectFit }}
      />
    );
  }
}

Image.defaultProps = {
  style: undefined,
  objectFit: undefined
};

Image.propTypes = {
  style: PropTypes.object, // eslint-disable-line
  objectFit: PropTypes.oneOf(["cover"])
};

export default Image;
