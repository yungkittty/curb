import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import Loader from "../../../../components/loader";
import ResetPasswordContainer from "../../components/reset-password-container";
import Input from "../../../../components/input";
import inputRegex from "../../../../utils/input-regex";
/* eslint-disable */
import SignIn from "../../../sign-in";
import ResetPassword2 from "../reset-password-2";
/* eslint-enable */

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

    this.state = { loading: false };

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    setAppModalHeaderSteps({ headerCurrentStep: 1, headerSteps: 3 });
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
    const { setAppModalScene } = this.props;

    //  resetMail({ email: email.value });
    //    this.setState({ loading: true });
    //    TODO: Wait the callback from server

    setAppModalScene({ scene: ResetPassword2, sceneDirection: 1 });
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
    const { email, t } = this.props;
    const { loading } = this.state;

    return loading ? (
      <Loader />
    ) : (
      <ResetPasswordContainer>
        <Input
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
  email: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default withNamespaces("resetPassword")(ResetPassword1);
