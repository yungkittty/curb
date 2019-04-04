import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import SignUpContainer from "../../components/sign-up-container";
import SignUpTitle from "../../components/sign-up-title";
import Input from "../../../../components/input";
// eslint-disable-next-line
import SignUp1 from "../sign-up-1";

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalFooterButton
    } = this.props;

    this.goToPrev = this.goToPrev.bind(this);
    this.finish = this.finish.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ currentStep: 2, steps: 2 });
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: this.goToPrev });
    setAppModalFooterButton({ text: t("common:finish"), onClick: this.finish });
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: SignUp1, direction: -1 });
  }

  finish() {
    const { isSignUpFetching, signUp, name, email, password } = this.props;
    if (!isSignUpFetching && this.checkForm()) {
      signUp({
        name: name.value,
        email: email.value,
        password: password.value
      });
    }
  }

  checkForm() {
    const { password, confirmPassword } = this.props;
    const passwordCheck = this.checkInput("password", password.value);
    const confirmPasswordCheck = this.checkInput(
      "confirmPassword",
      confirmPassword.value
    );
    return passwordCheck && confirmPasswordCheck;
  }

  checkInput(id, value) {
    const { password, setAppModalSceneData, [id]: Y } = this.props;
    const error =
      // eslint-disable-next-line
      id === "password"
        ? value.length === 0
          ? "missing"
          : undefined
        : password.value !== value
        ? "dontmatch"
        : undefined;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { isSignUpFetching, t, password, confirmPassword } = this.props;
    return isSignUpFetching ? (
      <Loader />
    ) : (
      <SignUpContainer>
        <SignUpTitle type="h2" weight={700}>
          {t("choosePassword")}
        </SignUpTitle>
        <Input
          size="modal"
          id="password"
          placeholder={t("password")}
          type="password"
          value={password.value}
          onChange={this.handleChange}
          error={password.error && t(`validation:password.${password.error}`)}
        />
        <Input
          size="modal"
          id="confirmPassword"
          placeholder={t("confirmPassword")}
          type="password"
          value={confirmPassword.value}
          onChange={this.handleChange}
          error={
            confirmPassword.error &&
            t(`validation:password.${confirmPassword.error}`)
          }
        />
      </SignUpContainer>
    );
  }
}

SignUp2.defaultProps = {
  password: { value: "", error: undefined },
  confirmPassword: { value: "", error: undefined }
};

SignUp2.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  isSignUpFetching: PropTypes.bool.isRequired,
  signUp: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  name: PropTypes.shape({ value: PropTypes.string.isRequired }).isRequired,
  email: PropTypes.shape({ value: PropTypes.string.isRequired }).isRequired,
  password: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string
  }),
  confirmPassword: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string
  })
};

export default withTranslation("signUp")(SignUp2);
