import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../components/loader";
import AppModalSceneContainer from "../../components/app-modal-scene-container";
// eslint-disable-next-line
import SignInFooter from "./components/sign-in-footer";
import SignInForm from "./components/sign-in-form";

class SignIn extends Component {
  constructor(props) {
    super(props);

    const { setAppModalHeaderText, setAppModalFooterButton, t } = props;

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderText({ text: t("signIn") });
    setAppModalFooterButton({ text: t("signIn"), onClick: this.submit });
  }

  componentDidUpdate(prevProps) {
    const { isSignInFetching, enableAppModalButtons, disableAppModalButtons } = this.props;
    if (prevProps.isSignInFetching === isSignInFetching) return;
    if (isSignInFetching) disableAppModalButtons();
    else enableAppModalButtons();
  }

  submit() {
    const { signIn, email, password } = this.props;
    if (!this.checkForm()) return;
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
      <AppModalSceneContainer>
        <SignInForm email={email} password={password} onChange={this.handleChange} onSubmit={this.submit} />
        <SignInFooter setAppModalScene={setAppModalScene} t={t} />
      </AppModalSceneContainer>
    );
  }
}

SignIn.defaultProps = {
  email: { value: "", error: undefined },
  password: { value: "", error: undefined }
};

SignIn.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  isSignInFetching: PropTypes.bool.isRequired,
  hideAppModal: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  email: PropTypes.shape({ value: PropTypes.string.isRequired, error: PropTypes.string }),
  password: PropTypes.shape({ value: PropTypes.string.isRequired, error: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default withTranslation("signIn")(SignIn);
