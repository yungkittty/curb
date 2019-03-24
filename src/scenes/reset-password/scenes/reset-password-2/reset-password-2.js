import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import Loader from "../../../../components/loader";
import ResetPasswordContainer from "../../components/reset-password-container";
import InputCode from "../../../../components/input-code";
/* eslint-disable */
import ResetPassword1 from "../reset-password-1";
import ResetPassword3 from "../reset-password-3";
/* eslint-enable */

class ResetPassword2 extends Component {
  constructor(props) {
    super(props);

    const {
      setAppModalHeaderText,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton,
      t
    } = props;

    this.state = { loading: false, focus: false };

    this.submit = this.submit.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    setAppModalHeaderText({ headerText: t("resetPass") });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: ResetPassword1, sceneDirection: -1 })
    });
    setAppModalFooterButton({
      footerText: t("validateCode"),
      footerOnClick: this.validate
    });

    setTimeout(() => this.setState({ focus: true }), 450);
  }

  validate() {
    const { loading } = this.state;

    if (!loading && this.checkForm()) this.submit();
  }

  submit() {
    const { setAppModalFooterButton, t } = this.props;

    //    resetPass({ password: password.value });
    this.setState({ loading: true });
    setAppModalFooterButton({
      footerText: t("validateCode"),
      footerOnClick: undefined
    });
    //setAppModalScene({ scene: ResetPassword3, sceneDirection: 1 });
  }

  checkForm() {
    const { code } = this.props;

    const codeCheck = this.checkInput("code", code.value);

    return codeCheck;
  }

  checkInput(id, value) {
    const { setAppModalSceneData, [id]: Y } = this.props;

    const error = value.length === 0 ? "missing" : undefined;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    if (value.length === 6) this.validate();
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    //    const { t } = this.props;
    const { focus, loading } = this.state;

    return loading ? (
      <Loader />
    ) : (
      <ResetPasswordContainer>
        {focus && (
          <InputCode id="code" fields={6} onChange={this.handleChange} />
        )}
        {/* <Input
          size="modal"
          id="code"
          placeholder={t("code")}
          type="password"
          value={code.value}
          onChange={this.handleChange}
          error={code.error && t(`validation:code.${code.error}`)}
        /> */}
      </ResetPasswordContainer>
    );
  }
}

ResetPassword2.defaultProps = {
  code: { value: "" }
};

ResetPassword2.propTypes = {
  code: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default withNamespaces("resetPassword")(ResetPassword2);
