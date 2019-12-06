import _ from "lodash";
import React from "react";
import { withTranslation } from "react-i18next";
import withAppModal from "../../hocs/with-app-modal";
import withCurrentUser from "../../hocs/with-current-user";
import Card from "../../components/card";
// import Loader from "../../components/loader";

/* eslint-disable */

import CreateMediaEvent from "../../scenes/create-media/scenes/create-media-event";
import MediaEvent from "../group/components/group-list-item-media/components/item-media/components/media-event";
import Container from "../../components/container";
import ImageGallery from "../../components/image-gallery";
import Video from "../../components/video";

/* eslint-enable */

class Discovery extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mediaList: {} };
    this.myRef = React.createRef();
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
    console.log(this.myRef.current.getData());
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
          cardMenu={[
            {
              icon: "trash",
              text: "delete",
              onClick: this.removeContent
            }
          ]}
          postMediaTypes={[
            { type: "text", onChange: () => console.log("text") },
            {
              type: "event",
              onClick: () => console.log("add event to mediaList")
            },
            { type: "poll", onClick: () => console.log("add poll to mediaList") }
          ]}
          mediaList={{
            event: {
              component: <CreateMediaEvent ref={this.myRef} onEvenChange={data => console.log(data)} />
            }
          }}
        />
        <Card
          userId="5d373369c8acd2001d90bf55"
          cardMenu={[
            {
              icon: "trash",
              text: "delete",
              onClick: mediaType => console.log(`remove the ${mediaType} component`)
            }
          ]}
          postMediaTypes={[
            { type: "text", onChange: () => console.log("text") },
            {
              type: "event",
              onClick: () => console.log("add event to mediaList")
            },
            { type: "poll", onClick: () => console.log("add poll to mediaList") }
          ]}
          mediaList={{
            event: {
              component: (
                <MediaEvent
                  eventTitle="My event"
                  eventDate={new Date("December 6, 2019 23:24:00")}
                  userList={["", ""]}
                  groupTheme="#56CCF2"
                />
              )
            }
          }}
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
