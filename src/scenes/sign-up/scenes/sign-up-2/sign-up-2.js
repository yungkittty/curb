import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
/* eslint-disable-next-line */
import SignUp1 from "../sign-up-1";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import Input from "../../../../components/input";

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      data: {
        password = {
          value: "",
          error: false
        },
        confirmPassword = {
          value: "",
          error: false
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
      confirmPassword
    };

    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setProgress({ progress: 2, total: 2 });
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(SignUp1, -1));
    setButtonTitle(t("common:finish"));
    setButtonClick(this.goToNext.bind(this));
  }

  goToNext() {
    if (this.checkForm()) this.submit();
  }

  submit() {
    const {
      data: { name, email, password },
      signUp
    } = this.props;

    signUp({ name: name.value, email: email.value, password: password.value });
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
      value.length === 0 ||
      (id === "confirmPassword" && password.value !== value);

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

    return !error;
  }

  handleChange(event) {
    const { id, value } = event.target;

    this.checkInput(id, value);
  }

  render() {
    const { t } = this.props;
    const { password, confirmPassword } = this.state;

    return (
      <ContentContainer>
        <ContentTitle>{t("signUp:choosePassword")}</ContentTitle>
        <Input
          size="modal"
          id="password"
          placeholder={t("signUp:password")}
          type="password"
          value={password.value}
          onChange={this.handleChange}
          error={password.error && t("validation:password.missing")}
        />
        <Input
          size="modal"
          id="confirmPassword"
          placeholder={t("signUp:confirmPassword")}
          type="password"
          value={confirmPassword.value}
          onChange={this.handleChange}
          error={confirmPassword.error && t("validation:password.dontmatch")}
        />
      </ContentContainer>
    );
  }
}

SignUp2.defaultProps = {
  data: undefined,
  setData: undefined,
  setProgress: undefined,
  setLeftIcon: undefined,
  setLeftClick: undefined,
  setComponent: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

SignUp2.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({
    password: PropTypes.object,
    confirmPassword: PropTypes.object
  }),
  signUp: PropTypes.func.isRequired,
  setData: PropTypes.func,
  setProgress: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setLeftClick: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default withNamespaces()(SignUp2);
