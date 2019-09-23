import React from "react";
import PropTypes from "prop-types";
import Image from "../../../../../../../../components/image";
import getScaledSize from "../../utils/get-scaled-size";

class MediaImage extends React.Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.state = {
      imageWidth: 0,
      imageHeight: 0
    };
  }

  onLoad(event) {
    const {
      // eslint-disable-line
      naturalWidth: width,
      naturalHeight: height
    } = event.target;
    const {
      // eslint-disable-line
      width: imageWidth,
      height: imageHeight
    } = getScaledSize(
      // eslint-disable-line
      width,
      height,
      500,
      500
    );
    this.setState({
      imageWidth,
      imageHeight
    });
  }

  render() {
    const {
      // eslint-disable-line
      imageWidth,
      imageHeight
    } = this.state;
    return (
      <Image
        // eslint-disable-line
        {...this.props}
        onLoad={this.onLoad}
        objectFit="contain"
        style={{
          display: "flex",
          alignSelf: "center",
          width: imageWidth,
          height: imageHeight,
          maxWidth: "100%",
          borderRadius: 15
        }}
      />
    );
  }
}

MediaImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default MediaImage;
