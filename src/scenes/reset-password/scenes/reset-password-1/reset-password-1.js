import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../components/app-modal-scene-title";
import InputForm from "../../../../components/input-form";
import inputRegex from "../../../../utils/input-regex";
import withAppModal from "../../../../hocs/with-app-modal";
/* eslint-disable */
import withAccountRecovery from "../../../../hocs/with-account-recovery";
import SignIn from "../../../sign-in";
/* eslint-enable */

class ResetPassword1 extends Component {
  constructor(props) {
    super(props);

    const {
      // eslint-disable-line
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalFooterButton,
      t
    } = props;

    this.state = { isLoading: false, errorCode: false };

    this.goToPrev = this.goToPrev.bind(this);
    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ currentStep: 1, steps: 3 });
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: this.goToPrev });
    setAppModalFooterButton({ text: t("sendEmail"), onClick: this.submit });
  }

  componentDidUpdate(prevProps) {
    const { accountRecoveryErrorCode, enableAppModalButtons } = this.props;

    if (prevProps.isFetchingAccountRecovery && accountRecoveryErrorCode !== "") {
      // eslint-disable-next-line
      this.setState({ isLoading: false, errorCode: accountRecoveryErrorCode });
      enableAppModalButtons();
    }
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: SignIn, direction: -1 });
  }

  submit() {
    const { postAccountRecoveryEmail, email, disableAppModalButtons } = this.props;
    if (!this.checkForm()) return;
    postAccountRecoveryEmail({ email: email.value });
    disableAppModalButtons();
    this.setState({ isLoading: true });
  }

  checkForm() {
    const { email } = this.props;

    const emailCheck = this.checkInput("email", email.value);
    return emailCheck;
  }

  checkInput(id, value) {
    const { setAppModalSceneData, [id]: Y } = this.props;
    const { errorCode } = this.state;

    if (errorCode) this.setState({ errorCode: undefined });

    let error = value.length === 0 ? "missing" : undefined;
    if (error === undefined && id === "email")
      error = !RegExp(inputRegex.email).test(value) ? "invalid" : undefined;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { email, t } = this.props;
    const { isLoading, errorCode } = this.state;

    return isLoading ? (
      <Loader />
    ) : (
      <AppModalSceneContainer isJustified>
        <AppModalSceneTitle style={{ position: "absolute", top: 0 }}>
          {/* eslint-disable-line */}
          {t("enterYourEmail")}
        </AppModalSceneTitle>
        <InputForm
          size="modal"
          id="email"
          type="email"
          autoCapitalize="none"
          placeholder={t("common:email")}
          value={email.value}
          onChange={this.handleChange}
          error={
            // eslint-disable-next-line
            email.error
              ? t(`validation:email.${email.error}`)
              : errorCode
              ? t(`validation:email.${errorCode}`)
              : undefined
          }
        />
      </AppModalSceneContainer>
    );
  }
}

ResetPassword1.defaultProps = {
  email: { value: "" }
};

ResetPassword1.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  postAccountRecoveryEmail: PropTypes.func.isRequired,
  isFetchingAccountRecovery: PropTypes.bool.isRequired,
  accountRecoveryErrorCode: PropTypes.string.isRequired,
  email: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withAccountRecovery,
  withTranslation("resetPassword")
])(ResetPassword1);
