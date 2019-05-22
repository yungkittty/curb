import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import CreateMediaInputFile from "../../components/create-media-input-file";
import CreateMedia from "../../../create-media"; // eslint-disable-line
import CreateMediaError from "../../components/create-media-error";
import withAppModal from "../../../../hocs/with-app-modal";
import withCurrentUser from "../../../../hocs/with-current-user";
import withGroup from "../../../../hocs/with-group";

class CreateMediaImage extends Component {
  constructor(props) {
    super(props);

    this.state = { loadingProgress: undefined };

    const {
      t,
      setAppModalHeaderText,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton
    } = props;

    this.handleChange = this.handleChange.bind(this);
    this.onUploadProgress = this.onUploadProgress.bind(this);
    this.submit = this.submit.bind(this);

    setAppModalHeaderText({ text: t("modules:image.title") });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: CreateMedia, direction: -1 })
    });
    setAppModalFooterButton({ text: t("common:post"), onClick: this.submit });
  }

  componentDidUpdate(prevProps) {
    const { enableAppModalButtons, isFetchingMedias } = this.props;
    if (prevProps.isFetchingMedias && !isFetchingMedias) {
      // eslint-disable-next-line
      this.setState({ loadingProgress: undefined });
      enableAppModalButtons();
    }
  }

  onUploadProgress({ loaded, total }) {
    this.setState({ loadingProgress: loaded / total });
  }

  submit() {
    const { postMediaImage, disableAppModalButtons, groupId, currentUserId, image } = this.props;
    if (!this.checkForm()) return;
    postMediaImage({
      groupId,
      userId: currentUserId,
      image,
      onUploadProgress: this.onUploadProgress
    });
    disableAppModalButtons();
    this.onUploadProgress({ loaded: 0.1, total: 100 });
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
      t,
      mediasErrorCode,
      image: {
        value: { data }
      }
    } = this.props;
    return (
      <AppModalSceneContainer verticalAlign>
        {mediasErrorCode !== "" && (
          <CreateMediaError>{t(`errorCode:contents.${mediasErrorCode}`)}</CreateMediaError>
        )}
        <CreateMediaInputFile
          editMode={loadingProgress === undefined}
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
  t: PropTypes.func.isRequired,
  postMediaImage: PropTypes.func.isRequired,
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
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

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withGroup,
  withTranslation()
])(CreateMediaImage);
