import React from "react";
import PropTypes from "prop-types";
import FastImage from "react-native-fast-image";

// https://www.npmjs.com/package/react-native-fast-image

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowed: false };
  }

  render() {
    const { isShowed } = this.state;
    const { src, objectFit, style, ...others } = this.props;
    return (
      <FastImage
        {...others}
        source={{ uri: src[0] === "/" ? `${process.env.REACT_APP_API_URL}${src}` : src, cache: "web" }}
        resizeMode={objectFit}
        onLoadStart={() => this.setState({ isShowed: false })}
        onLoad={() => this.setState({ isShowed: true })}
        style={[style, { opacity: +isShowed }]}
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
  style: PropTypes.array, // eslint-disable-line
  objectFit: PropTypes.oneOf(["cover", "contain"])
};

export default Image;
