import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../components/loader";
import SignInContainer from "./components/sign-in-container";
// eslint-disable-next-line
import SignInRedirect from "./components/sign-in-redirect";
import SignInForm from "./components/sign-in-form";

class SignIn extends Component {
  constructor(props) {
    super(props);

    const { setAppModalHeaderText, setAppModalFooterButton, t } = props;

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    setAppModalHeaderText({ text: t("signIn") });
    setAppModalFooterButton({ text: t("signIn"), onClick: this.validate });
  }

  validate() {
    if (this.checkForm()) this.submit();
  }

  submit() {
    const { signIn, email, password } = this.props;
    signIn({ email: email.value, password: password.value });
  }

  checkForm() {
    const { email, password } = this.props;
    const emailCheck = this.checkInput("email", email.value);
    const passwordCheck = this.checkInput("password", password.value);
    return emailCheck && passwordCheck;
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

  render() {
    const { isSignInFetching, setAppModalScene, email, password, t } = this.props;
    return isSignInFetching ? (
      <Loader />
    ) : (
      <SignInContainer>
        <SignInForm email={email} password={password} onChange={this.handleChange} />
        <SignInRedirect setAppModalScene={setAppModalScene} t={t} />
      </SignInContainer>
    );
  }
}

SignIn.defaultProps = {
  email: { value: "", error: undefined },
  password: { value: "", error: undefined }
};

SignIn.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  isSignInFetching: PropTypes.bool.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  email: PropTypes.shape({ value: PropTypes.string.isRequired, error: PropTypes.string }),
  password: PropTypes.shape({ value: PropTypes.string.isRequired, error: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default withTranslation("signIn")(SignIn);
