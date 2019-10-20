import _ from "lodash";
import React from "react";
import { withTranslation } from "react-i18next";
import withAppModal from "../../hocs/with-app-modal";
import withCurrentUser from "../../hocs/with-current-user";
import Card from "../../components/card";
import { platformBools } from "../../configurations/platform";

/* eslint-disable */

import ContainerScroll from "../../components/container-scroll";
import ImageGallery from "../../components/image-gallery";
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
    const { t } = this.props;
    const { mediaList } = this.state;
    const postMediaTypes = [
      { type: "text", onChange: this.onChangeText },
      { type: "image", onSelect: this.addImage }
    ];
    if (!mediaList.video) postMediaTypes.push({ type: "video", onSelect: this.addVideo });
    return (
      <ContainerScroll
        style={{ flexDirection: "column", flex: 1 }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Card
          style={{ marginTop: 40 }}
          userId="5d89f888d93e22001db00053"
          onFloatingButtonClick={() => console.log("toto")}
          floatingButtonColor="rgb(86, 204, 242)"
          floatingButtonDisabled={!mediaList.text || (mediaList.text && mediaList.text.length === 0)}
          contentMenuButton={{ icon: "minus", onClick: this.removeContent }}
          postMediaTypes={postMediaTypes}
          mediaList={mediaList}
        />
        <Card
          style={{ marginTop: platformBools.isWeb ? 40 : 30 }}
          userId="5d89f888d93e22001db00053"
          cardMenu={[
            { text: t("common:delete"), icon: "trash", onClick: () => console.log("pin") },
            { text: t("common:report"), icon: "flag", onClick: () => console.log("pin") }
          ]}
          mediaList={{
            text:
              "Nous partageons sur ce post des plans ride localisés par la communauté sur toute la France. Vous pouvez également y partager vos photos et vidéos de vos tricks et suivre ceux des autres.",
            image: (
              <ImageGallery
                imagesData={[
                  "https://livingplatform.co/wp/greenwich/wp-content/uploads/sites/2/2019/03/photo-1520045892732-304bc3ac5d8e.jpeg",
                  "https://theboardr.blob.core.windows.net/eventsicons/1063.jpg",
                  "https://www.sitegallery.org/app/uploads/2019/08/NC-Sun-LR-@garryjonesphotography-84-1600x1066.jpg"
                ]}
              />
            ),
            video: (
              <Video
                style={{ height: "100%", width: "100%" }}
                src="https://www.videvo.net/videvo_files/converted/2015_08/preview/Slowmotion_closeup_of_skateboard.mp442512.webm"
              />
            )
          }}
        />
        <Card
          style={{ marginTop: platformBools.isWeb ? 40 : 30 }}
          userId="5d89f888d93e22001db00053"
          onFloatingButtonClick={() => console.log("toto")}
          likeNumber="541"
          floatingButtonColor="rgb(86, 204, 242)"
          cardMenu={[
            { text: t("common:pin"), icon: "thumbtack", onClick: () => console.log("pin") },
            { text: t("common:delete"), icon: "trash", onClick: () => console.log("pin") },
            { text: t("common:report"), icon: "flag", onClick: () => console.log("pin") }
          ]}
          mediaList={{
            text:
              "J'ai adoré Paris. C'était vraiment magnifique ! Il y a pleins de musées, de belles avenues, et de shopping à faire."
          }}
        />
        <Card
          style={{ marginTop: platformBools.isWeb ? 40 : 30 }}
          userId="5d89f888d93e22001db00053"
          onFloatingButtonClick={() => console.log("toto")}
          likeNumber="2 K"
          floatingButtonColor="rgb(86, 204, 242)"
          cardMenu={[
            { text: t("common:pin"), icon: "thumbtack", onClick: () => console.log("pin") },
            { text: t("common:delete"), icon: "trash", onClick: () => console.log("pin") },
            { text: t("common:report"), icon: "flag", onClick: () => console.log("pin") }
          ]}
          mediaList={{
            text: "J'ai adoré Paris. C'était vraiment magnifique !",
            image: (
              <ImageGallery
                imagesData={[
                  "https://www.pariscityvision.com/library/image/1668",
                  "https://www.parisinfo.com/var/otcp/sites/images/_aliases/article_full/node_43/arc-de-triomphe-au-soleil-couchant-%7C-630x405-%7C-%C2%A9-willian-west/18130652-1-fre-FR/Arc-de-Triomphe-au-soleil-couchant-%7C-630x405-%7C-%C2%A9-Willian-West.jpg"
                ]}
              />
            ),
            video: (
              <Video
                style={{ height: "100%", width: "100%" }}
                src="https://www.videvo.net/videvo_files/converted/2015_06/preview/Sacre_Coeur_am_WS_tilt_20150612_01_Videvo.mov38424.webm"
              />
            )
          }}
        />
        <Card
          style={{ marginTop: platformBools.isWeb ? 40 : 30 }}
          userId="5d89f888d93e22001db00053"
          onFloatingButtonClick={() => console.log("toto")}
          likeNumber="345"
          floatingButtonColor="rgb(86, 204, 242)"
          cardMenu={[{ text: t("common:report"), icon: "flag", onClick: () => console.log("pin") }]}
          mediaList={{
            text: "We are back very soon...",
            video: (
              <Video
                style={{ height: "100%", width: "100%" }}
                src="https://raw.githubusercontent.com/mediaelement/mediaelement-files/master/echo-hereweare.mp4"
              />
            ),
            image: (
              <ImageGallery
                imagesData={["https://johnmoyermusic.com/wp-content/uploads/2012/10/1-echo1-band.jpg"]}
              />
            )
          }}
        />
        <Card style={{ marginTop: platformBools.isWeb ? 40 : 30 }} groupId="5dac9a1e501e2a001de8e19f" />
        <Card
          style={
            platformBools.isWeb ? { marginTop: 40, marginBottom: 40 } : { marginTop: 30, marginBottom: 30 }
          }
          groupId="5dac9a7f501e2a001de8e1a2"
        />
      </ContainerScroll>
    );
  }
}

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withTranslation("common")
])(Discovery);
