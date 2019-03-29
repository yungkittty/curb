import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import Loader from "../../components/loader";
import SignInContainer from "./components/sign-in-container";
// eslint-disable-next-line
import SignInRedirect from "./components/sign-in-redirect";
import SignInForm from "./components/sign-in-form";
import inputRegex from "../../utils/input-regex";

class SignIn extends Component {
  constructor(props) {
    super(props);

    const { setAppModalHeaderText, setAppModalFooterButton, t } = props;

    this.state = { isLoading: false };

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    setAppModalHeaderText({ headerText: t("signIn") });
    setAppModalFooterButton({
      footerText: t("signIn"),
      footerOnClick: this.validate
    });
  }

  validate() {
    if (this.checkForm()) this.submit();
  }

  submit() {
    const { signIn, email, password } = this.props;
    signIn({ email: email.value, password: password.value });
    this.setState({ isLoading: true });
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
    const { setAppModalScene, email, password, t } = this.props;
    const { isLoading } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      <SignInContainer>
        <SignInForm
          email={email}
          password={password}
          onChange={this.handleChange}
        />
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
  email: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string
  }),
  password: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string
  }),
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withNamespaces("signIn")(SignIn);
