import _ from "lodash";
import React from "react";
import { withTranslation } from "react-i18next";
import withAppModal from "../../hocs/with-app-modal";
import withCurrentUser from "../../hocs/with-current-user";
import Card from "../../components/card";

/* eslint-disable */

import Container from "../../components/container";
import ImageGallery from "../../components/image-gallery";
import Video from "../../components/video";

import CreateMediaEvent from "../create-media/scenes/create-media-event";

/* eslint-enable */

class Discovery extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mediaList: {} };

    this.addImage = this.addImage.bind(this);
    this.addVideo = this.addVideo.bind(this);
    this.removeContent = this.removeContent.bind(this);
  }

  addImage(imageData) {
    const { imageList = [], mediaList } = this.state;
    const newImageList = [...imageList, imageData];
    this.setState({
      imageList: newImageList,
      mediaList: { ...mediaList, image: <ImageGallery imagesData={newImageList} /> }
    });
  }

  addVideo(videoData) {
    const { mediaList } = this.state;
    this.setState({
      mediaList: { ...mediaList, video: <Video style={{ flex: 1 }} src={videoData} /> }
    });
  }

  removeContent(mediaType) {
    const { mediaList, imageList } = this.state;

    if (mediaType === "image") {
      imageList.pop();
      this.setState({ imageList });
      if (_.size(imageList) === 0) delete mediaList.image;
    } else delete mediaList[mediaType];
    this.setState({ mediaList });
  }

  render() {
    return (
      <Container
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Card
          userId="5d373369c8acd2001d90bf55"
          mediaList={{ event: <CreateMediaEvent groupTheme="#56CCF2" /> }}
        />
      </Container>
    );
  }
}

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withTranslation("discovery")
])(Discovery);
