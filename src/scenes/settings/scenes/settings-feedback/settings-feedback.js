import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../components/app-modal-scene-title";
import FeedbackInput from "./components/feedback-input";
import Settings from "../../../settings"; // eslint-disable-line
import withAppModal from "../../../../hocs/with-app-modal";

class SettingsFeedback extends Component {
  constructor(props) {
    super(props);

    const {
      // eslint-disable-line
      setAppModalHeaderText,
      setAppModalHeaderLeftButtons,
      setAppModalHeaderBackButton,
      setAppModalFooterButton,
      t
    } = this.props;

    this.handleChange = this.handleChange.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);

    setAppModalHeaderText({ text: t("feedback.title") });
    setAppModalHeaderLeftButtons([{ icon: "arrow-left", onClick: this.goToPrev }]);
    setAppModalHeaderBackButton({ onClick: this.goToPrev });
    setAppModalFooterButton({ text: t("feedback.buttonTitle"), onClick: this.submit });
  }

  componentDidUpdate(prevProps) {
    const { isFetchingFeedback, enableAppModalButtons, disableAppModalButtons } = this.props;
    if (prevProps.isFetchingFeedback === isFetchingFeedback) return;
    if (isFetchingFeedback) disableAppModalButtons();
    else enableAppModalButtons();
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: Settings, direction: -1 });
  }

  checkForm() {
    const { text } = this.props;
    return this.checkInput("text", text.value);
  }

  checkInput(id, value) {
    const error = value.length === 0 ? "missing" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  submit() {
    const {
      // eslint-disable-line
      postFeedback,
      text,
      disableAppModalButtons
    } = this.props;
    if (!this.checkForm()) {
      disableAppModalButtons();
      return;
    }
    postFeedback({ text: text.value });
  }

  render() {
    const { isFetchingFeedback, text, t } = this.props;
    return isFetchingFeedback ? (
      <Loader />
    ) : (
      <AppModalSceneContainer>
        <AppModalSceneTitle>
          {/* eslint-disable-line */}
          {t("feedback.contentTitle")}
        </AppModalSceneTitle>
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
  setAppModalHeaderLeftButtons: PropTypes.func.isRequired,
  setAppModalHeaderBackButton: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  isFetchingFeedback: PropTypes.bool.isRequired,
  text: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTranslation("settings")
])(SettingsFeedback);
