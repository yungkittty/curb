import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import Loader from "../../components/loader";
import SignInContainer from "./components/sign-in-container";
// eslint-disable-next-line
import SignInRedirect from "./components/sign-in-redirect";
import SignInForm from "./components/sign-in-form";

class SignIn extends Component {
  constructor(props) {
    super(props);

    const { setAppModalHeaderText, setAppModalFooterButton, t } = props;

    this.state = {
      email: {
        value: "",
        error: undefined
      },
      password: {
        value: "",
        error: undefined
      },
      loading: false
    };

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    setAppModalHeaderText({ headerText: t("signIn") });
    setAppModalFooterButton({ footerText: t("signIn"), footerOnClick: this.validate });
  }

  validate() {
    if (this.checkForm()) this.submit();
  }

  submit() {
    const { signIn } = this.props;
    const { email, password } = this.state;
    signIn({ email: email.value, password: password.value });
    this.setState({ loading: true });
  }

  checkForm() {
    const { email, password } = this.state;
    const emailCheck = this.checkInput("email", email.value);
    const passwordCheck = this.checkInput("password", password.value);
    return emailCheck && passwordCheck;
  }

  checkInput(id, value) {
    const error = value.length === 0 ? "missing" : undefined;
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
    const { setAppModalScene, t } = this.props;
    const { email, password, loading } = this.state;
    return loading ? (
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

SignIn.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withNamespaces("signIn")(SignIn);
