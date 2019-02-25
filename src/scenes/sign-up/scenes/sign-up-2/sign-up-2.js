import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
/* eslint-disable-next-line */
import SignUp1 from "../sign-up-1";
import Loader from "../../../../components/loader";
import SignUp2Container from "./components/sign-up-2-container";
import SignUp2Title from "./components/sign-up-2-title";
import Input from "../../../../components/input";

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      data: {
        password = {
          value: "",
          error: undefined
        },
        confirmPassword = {
          value: "",
          error: undefined
        }
      },
      setProgress,
      setComponent,
      setLeftIcon,
      setLeftClick,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.state = {
      password,
      confirmPassword,
      loading: false
    };

    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    setProgress({ progress: 2, total: 2 });
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(SignUp1, -1));
    setButtonTitle(t("common:finish"));
    setButtonClick(this.validate);
  }

  validate() {
    if (this.checkForm()) this.submit();
  }

  submit() {
    const {
      data: { name, email, password },
      signUp,
      setLeftClick,
      setButtonClick
    } = this.props;

    signUp({ name: name.value, email: email.value, password: password.value });
    setLeftClick(undefined);
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
    const { setData } = this.props;

    const error =
      // eslint-disable-next-line
      id === "password"
        ? value.length === 0
          ? "missing"
          : undefined
        : password.value !== value
        ? "dontmatch"
        : undefined;

    this.setState(prev => {
      const obj = {
        [id]: {
          ...prev[id],
          value,
          error
        }
      };
      setData(obj);
      return obj;
    });

    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;

    this.checkInput(id, value);
  }

  render() {
    const { t } = this.props;
    const { password, confirmPassword, loading } = this.state;

    return loading ? (
      <Loader />
    ) : (
      <SignUp2Container>
        <SignUp2Title>{t("choosePassword")}</SignUp2Title>
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
      </SignUp2Container>
    );
  }
}

SignUp2.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({
    password: PropTypes.object,
    confirmPassword: PropTypes.object
  }).isRequired,
  signUp: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
  setLeftIcon: PropTypes.func.isRequired,
  setLeftClick: PropTypes.func.isRequired,
  setComponent: PropTypes.func.isRequired,
  setButtonTitle: PropTypes.func.isRequired,
  setButtonClick: PropTypes.func.isRequired
};

export default withNamespaces("signUp")(SignUp2);
