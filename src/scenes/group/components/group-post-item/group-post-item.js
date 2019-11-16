import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import CardImageGallery from "../../../../components/card-image-gallery";
import CardVideo from "../../../../components/card-video";
import CardMap from "../../../../components/card-map";
import GroupCardContainer from "../group-card-container";
import PostItemRule from "./components/post-item-rule";

class GroupPostItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mediaList: {} };

    this.getPostMediaTypes = this.getPostMediaTypes.bind(this);
    this.pushToMediaList = this.pushToMediaList.bind(this);
    this.removeMediaListKey = this.removeMediaListKey.bind(this);
    this.removeContent = this.removeContent.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
    this.onClickLocation = this.onClickLocation.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  onChangeText({ target: { value } }) {
    if (value !== "") this.pushToMediaList({ key: "text", value });
    else this.removeMediaListKey({ key: "text" });
  }

  onSelectImage({ data, file }) {
    const { image: { value = [] } = {} } = this.state;
    const newImageList = [...value, { data, file }];
    this.pushToMediaList({
      key: "image",
      component: <CardImageGallery imagesData={newImageList} />,
      value: newImageList
    });
  }

  onSelectVideo({ data, file }) {
    this.pushToMediaList({
      key: "video",
      component: <CardVideo src={data} />,
      value: { data, file }
    });
  }

  onClickLocation() {
    this.pushToMediaList({ key: "location", component: <CardMap /> });
  }

  getPostMediaTypes(groupMediaTypes) {
    const { mediaList } = this.state;
    const postMediaTypes = [];
    if (_.includes(groupMediaTypes, "text"))
      postMediaTypes.push({ type: "text", onChange: this.onChangeText });
    if (_.includes(groupMediaTypes, "image"))
      postMediaTypes.push({ type: "image", onSelect: this.onSelectImage });
    if (_.includes(groupMediaTypes, "video") && !mediaList.video)
      postMediaTypes.push({ type: "video", onSelect: this.onSelectVideo });
    if (_.includes(groupMediaTypes, "location") && !mediaList.location)
      postMediaTypes.push({ type: "location", onClick: this.onClickLocation });
    return postMediaTypes;
  }

  removeContent(mediaType) {
    const {
      mediaList: { image }
    } = this.state;
    if (mediaType === "image") {
      image.value.pop();
      this.setState({ mediaList: { image: { ...image } } });
      if (_.size(image.value) > 0) return;
    }
    this.removeMediaListKey({ key: mediaType });
  }

  pushToMediaList({ key, ...others }) {
    const { mediaList } = this.state;
    this.setState({
      mediaList: { ...mediaList, [key]: others }
    });
  }

  removeMediaListKey({ key }) {
    const { mediaList } = this.state;
    this.setState({
      mediaList: { ..._.omit(mediaList, key) }
    });
  }

  submitPost() {
    const { mediaList, imageList } = this.state;
    const { postPost, groupId } = this.props;
    postPost({ groupId, mediaList });
  }

  render() {
    const { mediaList } = this.state;
    // console.log(mediaList);
    const {
      // eslint-disable-line
      theme,
      currentUserId,
      groupId,
      groupTheme,
      groupMediaTypes
    } = this.props;
    const isPostValid = _.size(mediaList) > 0;
    return (
      <React.Fragment>
        <GroupCardContainer
          userId={currentUserId}
          postMediaTypes={this.getPostMediaTypes(groupMediaTypes)}
          mediaList={mediaList}
          onFloatingButtonClick={this.submitPost}
          floatingButtonColor={groupTheme}
          floatingButtonDisabled={!isPostValid}
          contentMenuButton={{ icon: "minus", onClick: this.removeContent }}
        />
        <PostItemRule />
      </React.Fragment>
    );
  }
}

GroupPostItem.propTypes = {
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default GroupPostItem;
