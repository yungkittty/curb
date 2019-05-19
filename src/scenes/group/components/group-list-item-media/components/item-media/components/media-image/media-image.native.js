import React from "react";
import PropTypes from "prop-types";
import { Image as _Image } from "react-native";
import Image from "../../../../../../../../components/image";
import getScaledSize from "../../utils/get-scaled-size";
import { windowDimensions } from "../../../../../../../../configurations/window";

class MediaImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageWidth: undefined,
      imageHeight: undefined
    };
  }

  componentDidMount() {
    const { src } = this.props;
    const isImageFromApi = src.substr(0, 9) === "/contents";
    _Image.getSize(
      isImageFromApi ? `${process.env.REACT_APP_API_URL}${src}` : src,
      // eslint-disable-line
      (width, height) => {
        const {
          // eslint-disable-line
          width: imageWidth,
          height: imageHeight
        } = getScaledSize(
          // eslint-disable-line
          width,
          height,
          windowDimensions.width - 80,
          350
        );
        this.setState({
          imageWidth,
          imageHeight
        });
      }
    );
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
