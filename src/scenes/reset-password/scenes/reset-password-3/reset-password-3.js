import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../components/app-modal-scene-title";
import InputForm from "../../../../components/input-form";
import inputRegex from "../../../../utils/input-regex";
import forbiddenPasswords from "../../../../utils/forbidden-passwords";
import withAppModal from "../../../../hocs/with-app-modal";
/* eslint-disable */
import withAccountRecovery from "../../../../hocs/with-account-recovery";
import ResetPassword2 from "../reset-password-2";
/* eslint-enable */

class ResetPassword3 extends Component {
  constructor(props) {
    super(props);

    const {
      // eslint-disable-line
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalFooterButton,
      t
    } = props;

    this.state = { isLoading: false };

    this.goToPrev = this.goToPrev.bind(this);
    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ currentStep: 3, steps: 3 });
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: this.goToPrev });
    setAppModalFooterButton({ text: t("resetPass"), onClick: this.submit });
  }

  componentDidUpdate(prevProps) {
    const { accountRecoveryErrorCode, enableAppModalButtons } = this.props;

    if (prevProps.isFetchingAccountRecovery && accountRecoveryErrorCode !== "") {
      // eslint-disable-next-line
      this.setState({ isLoading: false });
      enableAppModalButtons();
    }
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: ResetPassword2, direction: -1 });
  }

  submit() {
    const { postAccountRecoveryPassword, email, code, resetPassword, disableAppModalButtons } = this.props;
    if (!this.checkForm()) return;
    postAccountRecoveryPassword({
      email: email.value,
      code: code.value,
      password: resetPassword.value
    });
    disableAppModalButtons();
    this.setState({ isLoading: true });
  }

  checkForm() {
    const { resetPassword, confirmResetPassword } = this.props;

    const resetPasswordCheck = this.checkInput("resetPassword", resetPassword.value);
    const confirmResetPasswordCheck = this.checkInput("confirmResetPassword", confirmResetPassword.value);

    return resetPasswordCheck && confirmResetPasswordCheck;
  }

  checkInput(id, value) {
    const { resetPassword, setAppModalSceneData, [id]: Y } = this.props;

    const error =
      /* eslint-disable */
      id === "resetPassword"
        ? value.length === 0
          ? "missing"
          : !RegExp(inputRegex.password).test(value)
          ? "invalid"
          : forbiddenPasswords.includes(value)
          ? "tooeasy"
          : undefined
        : resetPassword.value !== value
        ? "dontmatch"
        : undefined;
    /* eslint-enable */
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { resetPassword, confirmResetPassword, t } = this.props;
    const { isLoading } = this.state;

    return isLoading ? (
      <Loader />
    ) : (
      <AppModalSceneContainer>
        <AppModalSceneTitle>
          {/* eslint-disable-line */}
          {t("chooseNewPassword")}
        </AppModalSceneTitle>
        <InputForm
          size="modal"
          id="resetPassword"
          placeholder={t("common:password")}
          type="password"
          value={resetPassword.value}
          onChange={this.handleChange}
          error={resetPassword.error && t(`validation:password.${resetPassword.error}`)}
        />
        <InputForm
          size="modal"
          id="confirmResetPassword"
          placeholder={t("common:confirmPassword")}
          type="password"
          value={confirmResetPassword.value}
          onChange={this.handleChange}
          error={confirmResetPassword.error && t(`validation:password.${confirmResetPassword.error}`)}
        />
      </AppModalSceneContainer>
    );
  }
}

ResetPassword3.defaultProps = {
  email: { value: "" },
  code: { value: "" },
  resetPassword: { value: "" },
  confirmResetPassword: { value: "" }
};

ResetPassword3.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  isFetchingAccountRecovery: PropTypes.bool.isRequired,
  accountRecoveryErrorCode: PropTypes.string.isRequired,
  postAccountRecoveryPassword: PropTypes.func.isRequired,
  email: PropTypes.shape({ value: PropTypes.string }),
  code: PropTypes.shape({ value: PropTypes.string }),
  resetPassword: PropTypes.shape({ value: PropTypes.string }),
  confirmResetPassword: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flow([
  // eslint-disable-line
  withAppModal,
  withAccountRecovery,
  withTranslation("resetPassword")
])(ResetPassword3);
