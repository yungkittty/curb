import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import Loader from "../../../../components/loader";
import ResetPasswordContainer from "../../components/reset-password-container";
import Input from "../../../../components/input";
// eslint-disable-next-line
import ResetPassword2 from "../reset-password-2";

class ResetPassword3 extends Component {
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

    setAppModalHeaderSteps({ headerCurrentStep: 3, headerSteps: 3 });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: ResetPassword2, sceneDirection: -1 })
    });
    setAppModalFooterButton({
      footerText: t("resetPass"),
      footerOnClick: this.validate
    });
  }

  validate() {
    const { loading } = this.state;

    if (!loading && this.checkForm()) this.submit();
  }

  submit() {
    const { setAppModalFooterButton, t } = this.props;

    //    resetPass({ password: password.value });
    setAppModalFooterButton({
      footerText: t("resetPass"),
      footerOnClick: undefined
    });
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
    const { setAppModalSceneData, password, [id]: Y } = this.props;

    const error =
      // eslint-disable-next-line
      id === "password"
        ? value.length === 0
          ? "missing"
          : undefined
        : password.value !== value
        ? "dontmatch"
        : undefined;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { password, confirmPassword, t } = this.props;
    const { loading } = this.state;

    return loading ? (
      <Loader />
    ) : (
      <ResetPasswordContainer>
        <Input
          size="modal"
          id="password"
          placeholder={t("common:password")}
          type="password"
          value={password.value}
          onChange={this.handleChange}
          error={password.error && t(`validation:password.${password.error}`)}
        />
        <Input
          size="modal"
          id="confirmPassword"
          placeholder={t("common:confirmPassword")}
          type="password"
          value={confirmPassword.value}
          onChange={this.handleChange}
          error={
            confirmPassword.error &&
            t(`validation:password.${confirmPassword.error}`)
          }
        />
      </ResetPasswordContainer>
    );
  }
}

ResetPassword3.defaultProps = {
  password: { value: "" },
  confirmPassword: { value: "" }
};

ResetPassword3.propTypes = {
  password: PropTypes.shape({ value: PropTypes.string }),
  confirmPassword: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default withNamespaces("resetPassword")(ResetPassword3);
