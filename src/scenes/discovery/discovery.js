import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import withAppModal from "../../hocs/with-app-modal";
import withCurrentUser from "../../hocs/with-current-user";
import Card from "../../components/card";
import Loader from "../../components/loader";

/* eslint-disable */

import Container from "../../components/container";
import Image from "../../components/image";
import Video from "../../components/video";

/* eslint-enable */

class Discovery extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mediaList: {} };

    this.onChangeText = this.onChangeText.bind(this);
    this.addImage = this.addImage.bind(this);
    this.addVideo = this.addVideo.bind(this);

    this.removeContent = this.removeContent.bind(this);
  }

  onChangeText({ target: { value } }) {
    const { mediaList } = this.state;
    this.setState({
      mediaList: value !== "" ? { ...mediaList, text: value } : { ..._.omit(mediaList, "text") }
    });
  }

  addImage(imageData) {
    const {
      mediaList,
      mediaList: { image = [] }
    } = this.state;
    this.setState({
      mediaList: { ...mediaList, image: [...image, imageData] }
    });
  }

  addVideo(videoData) {
    const { mediaList } = this.state;
    //    console.log(mediaList);
    this.setState({
      mediaList: { ...mediaList, video: videoData }
    });
  }

  removeContent(mediaType) {
    const { mediaList } = this.state;
    mediaList[mediaType].pop();
    if (_.size(mediaList[mediaType]) === 0) delete mediaList[mediaType];
    //    console.log(mediaList);
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
          dropdownMenu={{
            icon: "minus",
            onClick: mediaType => console.log(`remove the ${mediaType} component`)
          }}
          postMediaTypes={[
            { type: "text", onChange: () => console.log("text") },
            {
              type: "event",
              onClick: () => console.log("add event to mediaList")
            },
            { type: "poll", onClick: () => console.log("add poll to mediaList") }
          ]}
          mediaList={{ event: <Loader />, poll: <Loader /> }}
        />
      </Container>
    );
  }
}

Discovery.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  isDiscoveryGlobalSectionEnd: PropTypes.bool.isRequired,
  isDiscoveryCustomSectionEnd: PropTypes.bool.isRequired,
  isDiscoveryRandomSectionEnd: PropTypes.bool.isRequired,
  discoveryGlobalSectionGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  discoveryCustomSectionGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  discoveryRandomSectionGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  getDiscoveryGlobalSectionGroupsId: PropTypes.func.isRequired,
  getDiscoveryCustomSectionGroupsId: PropTypes.func.isRequired,
  getDiscoveryRandomSectionGroupsId: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withTranslation("discovery")
])(Discovery);
