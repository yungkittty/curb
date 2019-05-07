import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import withUser from "../../../../hocs/with-user";
import withAppModal from "../../../../hocs/with-app-modal";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import InputFile from "../../../../components/input-file";
import CreateMediaInputFile from "../../components/create-media-input-file";
// eslint-disable-next-line
import CreateMedia from "../../create-media";

class CreateMediaImage extends Component {
  constructor(props) {
    super(props);

    this.state = { loadingProgress: undefined };

    const {
      setAppModalHeaderText,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton
    } = props;

    this.handleChange = this.handleChange.bind(this);
    this.onUploadProgress = this.onUploadProgress.bind(this);
    this.submit = this.submit.bind(this);

    setAppModalHeaderText({ headerText: "Image" });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: CreateMedia, direction: -1 })
    });
    setAppModalFooterButton({ text: "Send", onClick: this.submit });
  }

  componentDidUpdate(prevProps) {
    const { isFetchingMedias } = this.props;
    if (prevProps.isFetchingMedias && !isFetchingMedias)
      // eslint-disable-next-line
      this.setState({ loadingProgress: undefined });
  }

  onUploadProgress({ loaded, total }) {
    this.setState({ loadingProgress: loaded / total });
  }

  submit() {
    if (!this.checkForm()) return;
    const { postGroupImageContent, groupId, currentUserId: userId, image } = this.props;
    postGroupImageContent({
      groupId,
      userId,
      image: image.value.file,
      onUploadProgress: this.onUploadProgress
    });
  }

  checkForm() {
    const {
      image: {
        value: { data }
      }
    } = this.props;
    return data !== undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value } });
  }

  render() {
    const { loadingProgress } = this.state;
    const {
      image: {
        value: { data }
      }
    } = this.props;
    return (
      <AppModalSceneContainer verticalAlign>
        <InputFile
          editMode
          as={CreateMediaInputFile}
          id="image"
          type="image"
          data={data}
          onSelect={this.handleChange}
          loadingProgress={loadingProgress}
        />
      </AppModalSceneContainer>
    );
  }
}

CreateMediaImage.defaultProps = {
  image: { value: { data: undefined } }
};

CreateMediaImage.propTypes = {
  postGroupImageContent: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
  isFetchingMedias: PropTypes.bool.isRequired,
  mediasErrorCode: PropTypes.string.isRequired,
  image: PropTypes.shape({ value: PropTypes.shape({ data: PropTypes.string }) })
};

export default _.flow([withUser, withAppModal])(CreateMediaImage);
