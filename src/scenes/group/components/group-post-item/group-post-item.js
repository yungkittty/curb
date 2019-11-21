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

    this.onModuleIsValid = this.onModuleIsValid.bind(this);
    this.getPostMediaTypes = this.getPostMediaTypes.bind(this);
    this.pushToMediaList = this.pushToMediaList.bind(this);
    this.removeMediaListKey = this.removeMediaListKey.bind(this);
    this.removeContent = this.removeContent.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
    this.onClickLocation = this.onClickLocation.bind(this);
    this.submitPost = this.submitPost.bind(this);
    this.checkIsPostValid = this.checkIsPostValid.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { isPostFetching } = this.props;
    if (prevProps.isPostFetching && !isPostFetching)
      // call all refs with clear();

      // eslint-disable-next-line
      this.setState({ mediaList: {} });
  }

  onChangeText({ target: { value } }) {
    if (value !== "") this.pushToMediaList({ key: "text", value });
    else this.removeMediaListKey({ key: "text" });
  }

  onSelectImage(props) {
    const {
      mediaList: { image: { imageList = [] } = {} }
    } = this.state;
    const newImageList = [...imageList, props];
    this.pushToMediaList({
      key: "image",
      component: <CardImageGallery imageList={newImageList} />,
      imageList: newImageList
    });
  }

  onSelectVideo(props) {
    this.pushToMediaList({
      key: "video",
      component: <CardVideo {...props} />
    });
  }

  onClickLocation() {
    this.pushToMediaList({
      key: "location",
      component: (
        <CardMap
          onModuleIsValid={({ isValid }) => this.onModuleIsValid({ key: "location", isValid })}
          draggable
        />
      ),
      isValid: false
    });
  }

  onModuleIsValid({ key, isValid }) {
    const {
      mediaList,
      mediaList: { [key]: Y }
    } = this.state;
    this.setState({ mediaList: { ...mediaList, [key]: { ...Y, isValid } } });
  }

  getPostMediaTypes(groupMediaTypes) {
    const {
      mediaList: { video, location }
    } = this.state;
    const postMediaTypes = [];
    if (_.includes(groupMediaTypes, "text"))
      postMediaTypes.push({ type: "text", onChange: this.onChangeText });
    if (_.includes(groupMediaTypes, "image"))
      postMediaTypes.push({ type: "image", onSelect: this.onSelectImage });
    if (_.includes(groupMediaTypes, "video") && !video)
      postMediaTypes.push({ type: "video", onSelect: this.onSelectVideo });
    if (_.includes(groupMediaTypes, "location") && !location)
      postMediaTypes.push({ type: "location", onClick: this.onClickLocation });
    return postMediaTypes;
  }

  removeContent(mediaType) {
    if (mediaType === "image") {
      const {
        mediaList,
        mediaList: { image }
      } = this.state;
      image.imageList.pop();
      this.setState({ mediaList: { ...mediaList, image: { ...image } } });
      if (_.size(image.imageList) > 0) return;
    }
    this.removeMediaListKey({ key: mediaType });
  }

  pushToMediaList({ key, ...others }) {
    const {
      mediaList,
      mediaList: { [key]: Y = {} }
    } = this.state;
    const { component, ...mediaOthers } = others;
    let componentWithRef;
    let componentRef;
    if (component) {
      componentRef = React.createRef();
      componentWithRef = React.cloneElement(component, { ref: componentRef });
    }
    this.setState({
      mediaList: {
        ...mediaList,
        [key]: { ...Y, ...mediaOthers, component: componentWithRef, ref: componentRef }
      }
    });
  }

  removeMediaListKey({ key }) {
    const { mediaList } = this.state;
    this.setState({
      mediaList: { ..._.omit(mediaList, key) }
    });
  }

  submitPost() {
    const { mediaList } = this.state;
    const { postPost, groupId } = this.props;
    const mediaListData = {};
    _.forEach(_.keys(mediaList), key => {
      const {
        mediaList: {
          [key]: { value, ref: { current: moduleRef } = {} }
        }
      } = this.state;
      _.merge(mediaListData, { [key]: value || moduleRef.getData() });
    });
    postPost({ groupId, mediaListData });
  }

  checkIsPostValid() {
    const { mediaList } = this.state;
    let isPostValid = true;
    _.forEach(_.keys(mediaList), key => {
      const {
        mediaList: {
          [key]: { isValid = true }
        }
      } = this.state;
      if (!isValid) isPostValid = false;
    });
    return isPostValid;
  }

  render() {
    const { mediaList } = this.state;
    const {
      // eslint-disable-line
      currentUserId,
      groupThemeColor,
      groupMediaTypes
    } = this.props;
    return (
      <React.Fragment>
        <GroupCardContainer
          userId={currentUserId}
          postMediaTypes={this.getPostMediaTypes(groupMediaTypes)}
          mediaList={mediaList}
          onFloatingButtonClick={this.submitPost}
          floatingButtonColor={groupThemeColor}
          floatingButtonDisabled={!this.checkIsPostValid()}
          contentMenuButton={{ icon: "minus", onClick: this.removeContent }}
        />
        <PostItemRule />
      </React.Fragment>
    );
  }
}

GroupPostItem.propTypes = {
  isPostFetching: PropTypes.bool.isRequired,
  postPost: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  groupId: PropTypes.string.isRequired,
  groupThemeColor: PropTypes.string.isRequired,
  groupMediaTypes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default GroupPostItem;
