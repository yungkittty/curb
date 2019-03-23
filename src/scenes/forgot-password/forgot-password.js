import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import Loader from "../../components/loader";
import ForgotPasswordContainer from "./components/forgot-password-container";
import ForgotPasswordForm from "./components/forgot-password-form";
import inputRegex from "../../utils/input-regex";
// eslint-disable-next-line
import SignIn from "../sign-in";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    const {
      t,
      setAppModalHeaderText,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton
    } = props;

    this.state = {
      email: {
        value: "",
        error: undefined
      },
      loading: false
    };

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    setAppModalHeaderText({ headerText: t("resetPass") });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: SignIn, sceneDirection: -1 })
    });
    setAppModalFooterButton({
      footerText: t("sendEmail"),
      footerOnClick: this.validate
    });
  }

  validate() {
    if (this.checkForm()) this.submit();
  }

  submit() {
    const { signIn } = this.props;
    const { email } = this.state;
    signIn({ email: email.value });
    this.setState({ loading: true });
  }

  checkForm() {
    const { email } = this.state;
    const emailCheck = this.checkInput("email", email.value);
    return emailCheck;
  }

  checkInput(id, value) {
    let error = value.length === 0 ? "missing" : undefined;
    if (error === undefined && id === "email")
      error = !RegExp(inputRegex.email).test(value) ? "invalid" : undefined;

    this.setState(prevState => ({
      [id]: {
        ...prevState[id],
        value,
        error
      }
    }));
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { email, loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <ForgotPasswordContainer>
        <ForgotPasswordForm email={email} onChange={this.handleChange} />
      </ForgotPasswordContainer>
    );
  }
}

ForgotPassword.propTypes = {
  t: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default withNamespaces("forgotPass")(ForgotPassword);
