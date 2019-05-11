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
import SignUp1 from "../sign-up-1";

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    const { t, setAppModalHeaderSteps, setAppModalHeaderLeftButton, setAppModalFooterButton } = this.props;

    this.goToPrev = this.goToPrev.bind(this);
    this.finish = this.finish.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ currentStep: 2, steps: 2 });
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: this.goToPrev });
    setAppModalFooterButton({ text: t("common:finish"), onClick: this.finish });
  }

  componentDidUpdate(prevProps) {
    const { isSignUpFetching, enableAppModalButtons, disableAppModalButtons } = this.props;
    if (prevProps.isSignUpFetching === isSignUpFetching) return;
    if (isSignUpFetching) disableAppModalButtons();
    else enableAppModalButtons();
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: SignUp1, direction: -1 });
  }

  finish() {
    const { signUp, name, email, createPassword, avatar } = this.props;
    if (!this.checkForm()) return;
    signUp({
      name: name.value,
      email: email.value,
      password: createPassword.value,
      avatar
    });
  }

  checkForm() {
    const { createPassword, confirmPassword } = this.props;
    const createPasswordCheck = this.checkInput("createPassword", createPassword.value);
    const confirmPasswordCheck = this.checkInput("confirmPassword", confirmPassword.value);
    return createPasswordCheck && confirmPasswordCheck;
  }

  checkInput(id, value) {
    const { createPassword, setAppModalSceneData, [id]: Y } = this.props;
    const error =
      /* eslint-disable */
      id === "createPassword"
        ? value.length === 0
          ? "missing"
          : !RegExp(inputRegex.password).test(value)
          ? "invalid"
          : forbiddenPasswords.includes(value)
          ? "tooeasy"
          : undefined
        : createPassword.value !== value
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
    const { isSignUpFetching, t, createPassword, confirmPassword } = this.props;
    return isSignUpFetching ? (
      <Loader />
    ) : (
      <AppModalSceneContainer>
        <AppModalSceneTitle>{t("choosePassword")}</AppModalSceneTitle>
        <InputForm
          size="modal"
          id="createPassword"
          placeholder={t("common:password")}
          type="password"
          value={createPassword.value}
          onChange={this.handleChange}
          error={createPassword.error && t(`validation:password.${createPassword.error}`)}
        />
        <InputForm
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

SignUp2.defaultProps = {
  createPassword: { value: "", error: undefined },
  confirmPassword: { value: "", error: undefined },
  avatar: { value: { data: undefined, file: undefined }, error: undefined }
};

SignUp2.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  isSignUpFetching: PropTypes.bool.isRequired,
  signUpErrorCode: PropTypes.string.isRequired,
  hideAppModal: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  name: PropTypes.shape({ value: PropTypes.string.isRequired }).isRequired,
  email: PropTypes.shape({ value: PropTypes.string.isRequired }).isRequired,
  createPassword: PropTypes.shape({ value: PropTypes.string.isRequired, error: PropTypes.string }),
  confirmPassword: PropTypes.shape({ value: PropTypes.string.isRequired, error: PropTypes.string }),
  avatar: PropTypes.shape({
    value: PropTypes.shape({ data: PropTypes.string, file: PropTypes.object }),
    error: PropTypes.string
  }),
  t: PropTypes.func.isRequired
};

export default withTranslation("signUp")(SignUp2);
