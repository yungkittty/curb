import React from "react";
import PropTypes from "prop-types";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
  }

  render() {
    const { isShowed } = this.state;
    const { style, ...others } = this.props;
    return (
      <img
        {...others}
        alt=""
        onLoadStart={() => this.setState({ isShowed: false })}
        onLoad={() => this.setState({ isShowed: true })}
        style={{ ...style, opacity: +isShowed }}
      />
    );
  }
}

Image.defaultProps = { style: undefined };

Image.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Image;
