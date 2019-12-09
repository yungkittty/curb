import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import CardImageGallery from "../../../../components/card-image-gallery";
import CardVideo from "../../../../components/card-video";
import CardMap from "../../../../components/card-map";
import CardEvent from "../../../../components/card-event";
import GroupCardContainer from "../group-card-container";
import GroupCardLoadingOverlay from "../group-card-loading-overlay";
import PostItemRule from "./components/post-item-rule";

class GroupPostItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mediaList: {} };

    this.cardRef = React.createRef();

    this.onModuleIsValid = this.onModuleIsValid.bind(this);
    this.getPostMediaTypes = this.getPostMediaTypes.bind(this);
    this.pushToMediaList = this.pushToMediaList.bind(this);
    this.removeMediaListKey = this.removeMediaListKey.bind(this);
    this.removeContent = this.removeContent.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
    this.onClickLocation = this.onClickLocation.bind(this);
    this.onClickEvent = this.onClickEvent.bind(this);
    this.submitPost = this.submitPost.bind(this);
    this.checkIsPostValid = this.checkIsPostValid.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { mediaList } = this.state;
    const { isPostFetching } = this.props;
    if (prevProps.isPostFetching && !isPostFetching) {
      if (_.has(mediaList, "text")) this.cardRef.current.clearTextInput();
      this.setState({ mediaList: {} }); // eslint-disable-line
    }
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

  onSelectVideo({ data, ...others }) {
    this.pushToMediaList({
      key: "video",
      component: <CardVideo src={data} {...others} />
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

  onClickEvent() {
    const { groupThemeColor } = this.props;
    const key = "event";
    this.pushToMediaList({
      key,
      component: (
        <CardEvent
          groupThemeColor={groupThemeColor}
          onModuleIsValid={({ isValid }) => this.onModuleIsValid({ key, isValid })}
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
      mediaList: { video, location, event }
    } = this.state;
    const postMediaTypes = {};
    if (_.includes(groupMediaTypes, "text"))
      _.merge(postMediaTypes, { text: { onChange: this.onChangeText } });
    if (_.includes(groupMediaTypes, "image"))
      _.merge(postMediaTypes, { image: { onSelect: this.onSelectImage } });
    if (_.includes(groupMediaTypes, "video") && !video)
      _.merge(postMediaTypes, { video: { onSelect: this.onSelectVideo } });
    if (_.includes(groupMediaTypes, "location") && !location)
      _.merge(postMediaTypes, { location: { onClick: this.onClickLocation } });
    if (_.includes(groupMediaTypes, "event") && !event)
      _.merge(postMediaTypes, { event: { onClick: this.onClickEvent } });
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
    if (_.size(mediaList) === 0) return false;
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
      isPostFetching,
      currentUserId,
      groupThemeColor,
      groupMediaTypes
    } = this.props;
    return (
      <React.Fragment>
        <GroupCardContainer
          ref={this.cardRef}
          userId={currentUserId}
          postMediaTypes={this.getPostMediaTypes(groupMediaTypes)}
          mediaList={mediaList}
          onFloatingButtonClick={this.submitPost}
          floatingButtonColor={groupThemeColor}
          floatingButtonDisabled={!this.checkIsPostValid() || isPostFetching}
          contentMenuButton={{ icon: "minus", onClick: this.removeContent }}
          OverlayComponent={isPostFetching && <GroupCardLoadingOverlay />}
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
