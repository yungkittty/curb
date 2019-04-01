import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import SignUpContainer from "../../components/sign-up-container";
import SignUpTitle from "../../components/sign-up-title";
import SelectImage from "./components/select-image";
import Input from "../../../../components/input";
import inputRegex from "../../../../utils/input-regex";
/* eslint-disable */
import SignIn from "../../../sign-in";
import SignUp2 from "../sign-up-2";
/* eslint-enable */

class SignUp1 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton
    } = this.props;

    this.goToNext = this.goToNext.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ headerCurrentStep: 1, headerSteps: 2 });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: SignIn, sceneDirection: -1 })
    });
    setAppModalFooterButton({
      footerText: t("common:next"),
      footerOnClick: this.goToNext
    });
  }

  goToNext() {
    const { setAppModalScene } = this.props;
    if (this.checkForm()) {
      setAppModalScene({ scene: SignUp2, sceneDirection: 1 });
    }
  }

  checkForm() {
    const { name, email } = this.props;
    const nameCheck = this.checkInput("name", name.value);
    const emailCheck = this.checkInput("email", email.value);
    return nameCheck && emailCheck;
  }

  checkInput(id, value) {
    let error = value.length === 0 ? "missing" : undefined;
    if (error === undefined && id === "name")
      error = !RegExp(inputRegex.username).test(value) ? "invalid" : undefined;
    if (error === undefined && id === "email")
      error = !RegExp(inputRegex.email).test(value) ? "invalid" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { t, name, email } = this.props;
    return (
      <SignUpContainer>
        <SignUpTitle type="h2" weight={700}>
          {t("createAccount")}
        </SignUpTitle>
        <SelectImage />
        <Input
          size="modal"
          id="name"
          placeholder={t("username")}
          onChange={this.handleChange}
          value={name.value}
          error={name.error && t(`validation:username.${name.error}`)}
        />
        <Input
          size="modal"
          id="email"
          placeholder={t("mailAddress")}
          onChange={this.handleChange}
          value={email.value}
          error={email.error && t(`validation:email.${email.error}`)}
        />
      </SignUpContainer>
    );
  }
}

SignUp1.defaultProps = {
  name: { value: "", error: undefined },
  email: { value: "", error: undefined }
};

SignUp1.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  name: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string
  }),
  email: PropTypes.shape({
    value: PropTypes.string.isRequired,
    error: PropTypes.string
  }),
  t: PropTypes.func.isRequired
};

export default withTranslation("signUp")(SignUp1);
