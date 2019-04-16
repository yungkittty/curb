import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import ResetPasswordContainer from "../../components/reset-password-container";
import ResetPasswordTitle from "../../components/reset-password-title";
import InputForm from "../../../../components/input-form";
import inputRegex from "../../../../utils/input-regex";
// eslint-disable-next-line
import SignIn from "../../../sign-in";

class ResetPassword1 extends Component {
  constructor(props) {
    super(props);

    const {
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton,
      t
    } = props;

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    setAppModalHeaderSteps({ currentStep: 1, steps: 3 });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: SignIn, direction: -1 })
    });
    setAppModalFooterButton({
      text: t("sendEmail"),
      onClick: this.validate
    });
  }

  validate() {
    if (this.checkForm()) this.submit();
  }

  submit() {
    const { emailResetPass, email } = this.props;
    emailResetPass({ email: email.value });
  }

  checkForm() {
    const { email } = this.props;

    const emailCheck = this.checkInput("email", email.value);
    return emailCheck;
  }

  checkInput(id, value) {
    const { setAppModalSceneData, [id]: Y } = this.props;

    let error = value.length === 0 ? "missing" : undefined;
    if (error === undefined && id === "email")
      error = !RegExp(inputRegex.email).test(value) ? "invalid" : undefined;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { isAccountFetching, email, t } = this.props;

    return isAccountFetching ? (
      <Loader />
    ) : (
      <ResetPasswordContainer>
        <ResetPasswordTitle type="h2" weight={700}>
          {t("enterYourEmail")}
        </ResetPasswordTitle>
        <InputForm
          size="modal"
          id="email"
          placeholder={t("common:email")}
          value={email.value}
          onChange={this.handleChange}
          error={email.error && t(`validation:email.${email.error}`)}
        />
      </ResetPasswordContainer>
    );
  }
}

ResetPassword1.defaultProps = {
  email: { value: "" }
};

ResetPassword1.propTypes = {
  isAccountFetching: PropTypes.bool.isRequired,
  email: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired,
  emailResetPass: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default withTranslation("resetPassword")(ResetPassword1);
