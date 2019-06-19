import React from "react";
import Video from "../../../../../../../../components/video";
import getScaledSize from "../../utils/get-scaled-size";
import { windowDimensions } from "../../../../../../../../configurations/window";

class MediaVideo extends React.Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.state = {
      videoWidth: 0,
      videoHeight: 0
    };
  }

  onLoad(event) {
    const { width, height } = event.naturalSize;
    const {
      // eslint-disable-line
      width: videoWidth,
      height: videoHeight
    } = getScaledSize(
      // eslint-disable-line
      width,
      height,
      windowDimensions.width - 80,
      350
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
