import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import Loader from "../../../../components/loader";
import ResetPasswordContainer from "../../components/reset-password-container";
import ResetPasswordTitle from "../../components/reset-password-title";
import InputCode from "../../../../components/input-code";
// eslint-disable-next-line
import ResetPassword1 from "../reset-password-1";

class ResetPassword2 extends Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);

    setAppModalHeaderSteps({ headerCurrentStep: 2, headerSteps: 3 });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: ResetPassword1, sceneDirection: -1 })
    });
    setAppModalFooterButton({
      footerText: t("validateCode"),
      footerOnClick: this.validate
    });
  }

  validate(value) {
    const { loading } = this.state;

    if (!loading) this.submit(value);
  }

  submit(code) {
    const { validateCode, email } = this.props;

    validateCode({ code, email: email.value });
    this.setState({ loading: true });
  }

  checkInput(id, value) {
    const { setAppModalSceneData, [id]: Y } = this.props;

    const error = value.length === 0 ? "missing" : undefined;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    if (value.length === 6) this.validate(value);
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { loading } = this.state;

    return loading ? (
      <Loader />
    ) : (
      <ResetPasswordContainer>
        <ResetPasswordTitle type="h2" weight={700}>
          Enter the code you just recevied by email
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

export default withNamespaces("resetPassword")(ResetPassword2);
