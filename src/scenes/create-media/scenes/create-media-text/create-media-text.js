import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import withUser from "../../../../hocs/with-user";
import withAppModal from "../../../../hocs/with-app-modal";
import TextInput from "./components/text-input";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import CreateMedia from "../../../create-media";
import CreateMediaError from "../../components/create-media-error";


class CreateMediaText extends Component {
  constructor(props) {
    super(props);
    this.state = { loadingProgress: undefined };
    const {
      t,
      setAppModalHeaderText, 
      setAppModalFooterButton, 
      setAppModalHeaderLeftButton,
      setAppModalScene
     } = this.props;

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    
    setAppModalHeaderText({ text: t("modules:text.title") });
    setAppModalFooterButton({ text: t("common:post"), onClick: this.submit });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: CreateMedia, direction: -1 })
    });
  }

  componentDidUpdate(prevProps) {
    const { enableAppModalButtons, isFetchingMedias } = this.props;
    if (prevProps.isFetchingMedias && !isFetchingMedias) {
      // eslint-disable-next-line
      enableAppModalButtons();
    }
  }

  checkForm() {
    const {
      text
    } = this.props;
    return text !== undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({[id]: { ...Y, value } });
  }

  submit() {
    const {
      postMediasTextContent,
      groupId,
      currentUserId: userId,
      text
    } = this.props;
    if (!this.checkForm()) return;
    postMediasTextContent({
      groupId,
      userId,
      text
    });
  }

  render() {
    const { 
      t,
      mediasErrorCode,
      text } = this.props;

    return (
      <AppModalSceneContainer>
        {mediasErrorCode !== "" && (
          <CreateMediaError>{t(`errorCode:contents.${mediasErrorCode}`)}</CreateMediaError>
        )}
        <TextInput 
          multiline
          id="text"
          placeholder={t("modules:text.postPlaceholder")}
          onChange={this.handleChange}
          value={text.value}
        />  
      </AppModalSceneContainer>
    );
  }
}

CreateMediaText.defaultProps = {
  text: { value : "" }
};

CreateMediaText.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  mediasErrorCode: PropTypes.string.isRequired,
  text: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flow([withUser, withAppModal, withTranslation()])(CreateMediaText);