import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import FeedbackInput from "./components/feedback-input";
import FeedbackTitle from "./components/feedback-title"
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import Settings from "../../../settings"; // eslint-disable-line
import withAppModal from "../../../../hocs/with-app-modal";
import withCurrentUser from "../../../../hocs/with-current-user";

class SettingsFeedback extends Component {
  constructor(props) {
    super(props);

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

    setAppModalHeaderText({ text: t("feedback.title") });
    setAppModalFooterButton({ text: t("feedback.buttonTitle"), onClick: this.submit });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: Settings, direction: -1 })
    });
  }

  componentDidUpdate(prevProps) {
    const { enableAppModalButtons, isFetchingFeedback } = this.props;
    if (prevProps.isFetchingFeedback && !isFetchingFeedback) {
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
    const error = value.length === 0 ? "missing" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
  }

  submit() {
    const {
      // eslint-disable-line
      postFeedback,
      text,
      disableAppModalButtons
    } = this.props;
    if (!this.checkForm()) return;
    postFeedback({ text: text.value });
    disableAppModalButtons();
  }

  render() {
    const { isFetchingFeedback, text, t } = this.props;
    return isFetchingFeedback ? (
      <Loader />
    ) : (
      <AppModalSceneContainer>
        <FeedbackTitle type="h3" weight={700} >
          {t("feedback.contentTitle")}
        </FeedbackTitle>
        <FeedbackInput
          id="text"
          placeholder={t("feedback.placeholder")}
          onChange={this.handleChange}
          value={text.value}
          error={text.error && t("feedback.error")}
          isMultiline
        />
      </AppModalSceneContainer>
    );
  }
}

SettingsFeedback.defaultProps = {
  text: { value: "", error: undefined }
};

SettingsFeedback.propTypes = {
  postFeedback: PropTypes.func.isRequired,
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  isFetchingFeedback: PropTypes.bool.isRequired,
  currentUserId: PropTypes.string.isRequired,
  text: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withTranslation("settings")
])(SettingsFeedback);