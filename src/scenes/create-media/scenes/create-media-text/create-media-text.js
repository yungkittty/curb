import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import TextInput from "./components/text-input";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import CreateMedia from "../../../create-media"; // eslint-disable-line
import withAppModal from "../../../../hocs/with-app-modal";
import withCurrentUser from "../../../../hocs/with-current-user";
import withGroup from "../../../../hocs/with-group";

class CreateMediaText extends Component {
  constructor(props) {
    super(props);

    const {
      t,
      setAppModalHeaderText,
      setAppModalHeaderLeftButtons,
      setAppModalHeaderBackButton,
      setAppModalScene,
      setAppModalFooterButton,
    } = this.props;

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);

    setAppModalHeaderText({ text: t("modules:text.title") });
    setAppModalHeaderLeftButtons([{ icon: "arrow-left", onClick: () => setAppModalScene({ scene: CreateMedia, direction: -1 }) }]);
    setAppModalHeaderBackButton({ onClick: () => setAppModalScene({ scene: CreateMedia, direction: -1 }) });
    setAppModalFooterButton({ text: t("common:post"), onClick: this.submit });
  }

  componentDidUpdate(prevProps) {
    const { enableAppModalButtons, isFetchingMedias } = this.props;
    if (prevProps.isFetchingMedias && !isFetchingMedias) {
      // eslint-disable-next-line
      enableAppModalButtons();
    }
  }

  checkForm() {
    const { text } = this.props;
    return text.value !== "";
  }

  handleChange(event) {
    const { id, value } = event.target;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value } });
  }

  submit() {
    const {
      // eslint-disable-line
      postMediaText,
      groupId,
      currentUserId: userId,
      text,
      disableAppModalButtons
    } = this.props;
    if (!this.checkForm()) return;
    postMediaText({ groupId, userId, text: text.value });
    disableAppModalButtons();
  }

  render() {
    const { isFetchingMedias, text, t } = this.props;
    return isFetchingMedias ? (
      <Loader />
    ) : (
      <AppModalSceneContainer>
        <TextInput
          id="text"
          placeholder={t("modules:text.postPlaceholder")}
          onChange={this.handleChange}
          value={text.value}
          isMultiline
        />
      </AppModalSceneContainer>
    );
  }
}

CreateMediaText.defaultProps = {
  text: { value: "" }
};

CreateMediaText.propTypes = {
  postMediaText: PropTypes.func.isRequired,
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButtons: PropTypes.func.isRequired,
  setAppModalHeaderBackButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  isFetchingMedias: PropTypes.bool.isRequired,
  groupId: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
  text: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withGroup,
  withTranslation()
])(CreateMediaText);
