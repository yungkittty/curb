import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import pwnedpasswords from "pwnedpasswords/index";
import Loader from "../../../../components/loader";
import SignUpContainer from "../../components/sign-up-container";
import SignUpTitle from "../../components/sign-up-title";
import InputForm from "../../../../components/input-form";
import inputRegex from "../../../../utils/input-regex";
// eslint-disable-next-line
import SignUp1 from "../sign-up-1";

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton
    } = this.props;

    this.finish = this.finish.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ headerCurrentStep: 2, headerSteps: 2 });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: SignUp1, sceneDirection: -1 })
    });
    setAppModalFooterButton({
      footerText: t("common:finish"),
      footerOnClick: this.finish
    });

    this.state = { isLoading: false };
  }

  finish() {
    const { signUp, name, email, createPassword } = this.props;
    const { isLoading } = this.state;
    if (!isLoading && this.checkForm()) {
      signUp({
        name: name.value,
        email: email.value,
        password: createPassword.value
      });
      this.setState({ isLoading: true });
    }
  }

  checkForm() {
    const { createPassword, confirmPassword } = this.props;
    const createPasswordCheck = this.checkInput(
      "createPassword",
      createPassword.value
    );
    const confirmPasswordCheck = this.checkInput(
      "confirmPassword",
      confirmPassword.value
    );
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
          : undefined
        : createPassword.value !== value
        ? "dontmatch"
        : undefined;
    /* eslint-enable */
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    if (error === undefined)
      pwnedpasswords(value, (err, count) => {
        const { [id]: Z } = this.props;
        setAppModalSceneData({
          [id]: { ...Z, error: count > 10 ? "tooeasy" : undefined }
        });
      });
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { t, createPassword, confirmPassword } = this.props;
    const { isLoading } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      <SignUpContainer>
        <SignUpTitle type="h2" weight={700}>
          {t("choosePassword")}
        </SignUpTitle>
        <InputForm
          size="modal"
          id="createPassword"
          placeholder={t("password")}
          type="password"
          value={createPassword.value}
          onChange={this.handleChange}
          error={
            createPassword.error &&
            t(`validation:password.${createPassword.error}`)
          }
        />
        <InputForm
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
  createPassword: { value: "", error: undefined },
  confirmPassword: { value: "", error: undefined }
};

SignUp2.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  name: PropTypes.shape({ value: PropTypes.string.isRequired }).isRequired,
  email: PropTypes.shape({ value: PropTypes.string.isRequired }).isRequired,
  createPassword: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string
  }),
  confirmPassword: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string
  }),
  t: PropTypes.func.isRequired
};

export default withTranslation("signUp")(SignUp2);
