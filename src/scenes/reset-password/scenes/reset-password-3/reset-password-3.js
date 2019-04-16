import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../components/app-modal-scene-title";
import InputForm from "../../../../components/input-form";
import inputRegex from "../../../../utils/input-regex";
import forbiddenPasswords from "../../../../utils/forbidden-passwords";
// eslint-disable-next-line
import ResetPassword2 from "../reset-password-2";

class ResetPassword3 extends Component {
  constructor(props) {
    super(props);

    const {
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton,
      t
    } = props;

    this.state = { showErrorCode: false };

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ currentStep: 3, steps: 3 });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: ResetPassword2, sceneDirection: -1 })
    });
    setAppModalFooterButton({
      text: t("resetPass"),
      onClick: this.submit
    });
  }

  shouldComponentUpdate(nextProps) {
    const { isAccountResetPassFetching } = this.props;
    return !nextProps.isAccountResetPassSuccess || !isAccountResetPassFetching;
  }

  componentDidUpdate(prevProps) {
    const { showErrorCode } = this.state;
    const { accountResetPassErrorCode, setAppModalButtonsEnabled } = this.props;
    if (!showErrorCode && accountResetPassErrorCode && prevProps.isAccountResetPassFetching) {
      // eslint-disable-next-line
      this.setState({ showErrorCode: true });
      setAppModalButtonsEnabled({ enabled: true });
    }
  }

  submit() {
    const { resetPass, email, code, password, setAppModalButtonsEnabled } = this.props;
    if (!this.checkForm()) return;
    resetPass({
      email: email.value,
      code: code.value,
      password: password.value
    });
    setAppModalButtonsEnabled({ enabled: false });
  }

  checkForm() {
    const { password, confirmPassword } = this.props;

    const passwordCheck = this.checkInput("password", password.value);
    const confirmPasswordCheck = this.checkInput("confirmPassword", confirmPassword.value);

    return passwordCheck && confirmPasswordCheck;
  }

  checkInput(id, value) {
    const { password, setAppModalSceneData, [id]: Y } = this.props;
    const { showErrorCode } = this.state;

    if (showErrorCode) this.setState({ showErrorCode: false });

    const error =
      /* eslint-disable */
      id === "password"
        ? value.length === 0
          ? "missing"
          : !RegExp(inputRegex.password).test(value)
          ? "invalid"
          : forbiddenPasswords.includes(value)
          ? "tooeasy"
          : undefined
        : password.value !== value
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
    const { isAccountResetPassFetching, password, confirmPassword, t } = this.props;

    return isAccountResetPassFetching ? (
      <Loader />
    ) : (
      <AppModalSceneContainer verticalAlign>
        <AppModalSceneTitle style={{ position: "absolute", top: 0 }}>
          {t("chooseNewPassword")}
        </AppModalSceneTitle>
        <InputForm
          style={{ top: 30 }}
          size="modal"
          id="password"
          placeholder={t("common:password")}
          type="password"
          value={password.value}
          onChange={this.handleChange}
          error={password.error && t(`validation:password.${password.error}`)}
        />
        <InputForm
          style={{ top: 30 }}
          size="modal"
          id="confirmPassword"
          placeholder={t("common:confirmPassword")}
          type="password"
          value={confirmPassword.value}
          onChange={this.handleChange}
          error={confirmPassword.error && t(`validation:password.${confirmPassword.error}`)}
        />
      </AppModalSceneContainer>
    );
  }
}

ResetPassword3.defaultProps = {
  email: { value: "" },
  code: { value: "" },
  password: { value: "" },
  confirmPassword: { value: "" }
};

ResetPassword3.propTypes = {
  isAccountResetPassFetching: PropTypes.bool.isRequired,
  isAccountResetPassSuccess: PropTypes.bool.isRequired,
  accountResetPassErrorCode: PropTypes.string.isRequired,
  setAppModalButtonsEnabled: PropTypes.func.isRequired,
  email: PropTypes.shape({ value: PropTypes.string }),
  code: PropTypes.shape({ value: PropTypes.string }),
  password: PropTypes.shape({ value: PropTypes.string }),
  confirmPassword: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired,
  resetPass: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default withTranslation("resetPassword")(ResetPassword3);
