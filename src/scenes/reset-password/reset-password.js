import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import Loader from "../../components/loader";
import ResetPasswordContainer from "./components/reset-password-container";
import ResetPasswordForm from "./components/reset-password-form";

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    const { t, setTitle, setButtonTitle, setButtonClick } = props;

    this.state = {
      password: {
        value: "",
        error: undefined
      },
      confirmPassword: {
        value: "",
        error: undefined
      },
      loading: false
    };

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    setTitle(t("resetPass"));
    setButtonTitle(t("reset"));
    setButtonClick(this.validate);
  }

  validate() {
    const { loading } = this.state;

    if (!loading && this.checkForm()) this.submit();
  }

  submit() {
    const { resetPass, setButtonClick } = this.props;
    const { password } = this.state;

    resetPass({ password: password.value });
    setButtonClick(undefined);
    this.setState({ loading: true });
  }

  checkForm() {
    const { password, confirmPassword } = this.state;

    const passwordCheck = this.checkInput("password", password.value);
    const confirmPasswordCheck = this.checkInput(
      "confirmPassword",
      confirmPassword.value
    );

    return passwordCheck && confirmPasswordCheck;
  }

  checkInput(id, value) {
    const { password } = this.state;

    const error =
      // eslint-disable-next-line
      id === "password"
        ? value.length === 0
          ? "missing"
          : undefined
        : password.value !== value
        ? "dontmatch"
        : undefined;

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
    const { password, confirmPassword, loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <ResetPasswordContainer>
        <ResetPasswordForm
          password={password}
          confirmPassword={confirmPassword}
          onChange={this.handleChange}
        />
      </ResetPasswordContainer>
    );
  }
}

ResetPassword.propTypes = {
  t: PropTypes.func.isRequired,
  resetPass: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setButtonTitle: PropTypes.func.isRequired,
  setButtonClick: PropTypes.func.isRequired
};

export default withNamespaces("forgotPass")(ResetPassword);
