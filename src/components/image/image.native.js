import React from "react";
import { Image } from "react-native";
import PropTypes from "prop-types";

class _Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
  }

  render() {
    const { isShowed } = this.state;
    const { src, style, ...others } = this.props;
    return (
      <Image
        {...others}
        source={{ uri: src[0] === "/" ? `${process.env.REACT_APP_API_URL}${src}` : src }}
        onLoadStart={() => this.setState({ isShowed: false })}
        onLoad={() => this.setState({ isShowed: true })}
        style={[style, { opacity: +isShowed }]}
      />
    );
  }
}

_Image.defaultProps = { style: undefined };

_Image.propTypes = {
  // eslint-disable-next-line
  src: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default _Image;
