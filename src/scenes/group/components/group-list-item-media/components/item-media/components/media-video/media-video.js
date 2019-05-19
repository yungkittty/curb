import React from "react";
import Video from "../../../../../../../../components/video";
import getScaledSize from "../../utils/get-scaled-size";

class MediaVideo extends React.Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.state = {
      videoWidth: undefined,
      videoHeight: undefined
    };
  }

  onLoad(event) {
    const {
      // eslint-disable-line
      videoWidth: width,
      videoHeight: height
    } = event.target;
    const {
      // eslint-disable-line
      width: videoWidth,
      height: videoHeight
    } = getScaledSize(
      // eslint-disable-line
      width,
      height,
      500,
      500
    );
    this.setState({
      videoWidth,
      videoHeight
    });
  }

  render() {
    const {
      // eslint-disable-line
      videoWidth,
      videoHeight
    } = this.state;
    return (
      <Video
        // eslint-disable-line
        {...this.props}
        onCanPlay={this.onLoad}
        objectFit="contain"
        style={{
          display: "flex",
          alignSelf: "center",
          width: videoWidth,
          height: videoHeight,
          maxWidth: "100%",
          borderRadius: 15
        }}
      />
    );
  }
}

export default MediaVideo;
