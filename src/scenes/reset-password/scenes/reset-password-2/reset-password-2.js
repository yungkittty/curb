import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import ResetPasswordContainer from "../../components/reset-password-container";
import ResetPasswordTitle from "../../components/reset-password-title";
import InputCode from "../../../../components/input-code";
// eslint-disable-next-line
import ResetPassword1 from "../reset-password-1";

class ResetPassword2 extends Component {
  constructor(props) {
    super(props);

    const { setAppModalHeaderSteps, setAppModalHeaderLeftButton, setAppModalScene } = props;

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    setAppModalHeaderSteps({ currentStep: 2, steps: 3 });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: ResetPassword1, direction: -1 })
    });
  }

  submit(code) {
    const { validateCode, email } = this.props;

    validateCode({ code, email: email.value });
  }

  checkInput(id, value) {
    const { setAppModalSceneData, [id]: Y } = this.props;

    const error = value.length === 0 ? "missing" : undefined;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    if (value.length === 6) this.submit(value);
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { isAccountFetching, t } = this.props;

    return isAccountFetching ? (
      <Loader />
    ) : (
      <ResetPasswordContainer>
        <ResetPasswordTitle type="h2" weight={700}>
          {t("enterCode")}
        </ResetPasswordTitle>
        <InputCode id="code" fields={6} onChange={this.handleChange} />
      </ResetPasswordContainer>
    );
  }
}

ResetPassword2.defaultProps = {
  code: { value: "" },
  email: { value: "" }
};

ResetPassword2.propTypes = {
  isAccountFetching: PropTypes.bool.isRequired,
  code: PropTypes.shape({ value: PropTypes.string }),
  email: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired,
  validateCode: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default withTranslation("resetPassword")(ResetPassword2);
