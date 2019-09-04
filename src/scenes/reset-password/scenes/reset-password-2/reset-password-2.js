import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../components/loader";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../components/app-modal-scene-title";
import InputCode from "../../../../components/input-code";
import withAppModal from "../../../../hocs/with-app-modal";
/* eslint-disable */
import withAccountRecovery from "../../../../hocs/with-account-recovery";
import ResetPassword1 from "../reset-password-1";
/* eslint-enable */

class ResetPassword2 extends Component {
  constructor(props) {
    super(props);

    const {
      // eslint-disable-line
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButtons,
      setAppModalHeaderBackButton
    } = props;

    this.state = { isLoading: false, errorCode: undefined };

    this.goToPrev = this.goToPrev.bind(this);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.focusFirstNode = this.focusFirstNode.bind(this);

    setAppModalHeaderSteps({ currentStep: 2, steps: 3 });
    setAppModalHeaderLeftButtons([{ icon: "arrow-left", onClick: this.goToPrev }]);
    setAppModalHeaderBackButton({ onClick: this.goToPrev });

    this.inputCode = React.createRef();
    setTimeout(() => this.focusFirstNode(), 450);
  }

  componentDidUpdate(prevProps) {
    const { code, isFetchingAccountRecovery, accountRecoveryErrorCode, enableAppModalButtons } = this.props;

    if (
      code.value !== "" &&
      prevProps.isFetchingAccountRecovery &&
      !isFetchingAccountRecovery &&
      accountRecoveryErrorCode !== ""
    ) {
      // eslint-disable-next-line
      this.setState({ isLoading: false, errorCode: accountRecoveryErrorCode }, () => this.focusFirstNode());
      enableAppModalButtons();
    }
  }

  focusFirstNode() {
    const { current: inputCode } = this.inputCode;
    inputCode.focusFirstNode();
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: ResetPassword1, direction: -1 });
  }

  submit(code) {
    const { postAccountRecoveryPasswordCode, email, disableAppModalButtons } = this.props;

    postAccountRecoveryPasswordCode({ code, email: email.value });
    disableAppModalButtons();
    setTimeout(() => this.setState({ isLoading: true }));
  }

  checkInput(id, value) {
    const { setAppModalSceneData, [id]: Y } = this.props;
    const { errorCode } = this.state;

    if (errorCode) this.setState({ errorCode: undefined });

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
    const { t } = this.props;
    const { isLoading, errorCode } = this.state;

    return isLoading ? (
      <Loader />
    ) : (
      <AppModalSceneContainer isJustified>
        <AppModalSceneTitle style={{ position: "absolute", top: 0 }}>
          {/* eslint-disable-line */}
          {t("enterCode")}
        </AppModalSceneTitle>
        <InputCode
          id="code"
          fields={6}
          ref={this.inputCode}
          onChange={this.handleChange}
          error={errorCode ? t(`validation:resetPassCode.${errorCode}`) : undefined}
        />
      </AppModalSceneContainer>
    );
  }
}

ResetPassword2.defaultProps = {
  code: { value: "" },
  email: { value: "" }
};

ResetPassword2.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButtons: PropTypes.func.isRequired,
  setAppModalHeaderBackButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  postAccountRecoveryPasswordCode: PropTypes.func.isRequired,
  isFetchingAccountRecovery: PropTypes.bool.isRequired,
  accountRecoveryErrorCode: PropTypes.string.isRequired,
  code: PropTypes.shape({ value: PropTypes.string }),
  email: PropTypes.shape({ value: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withAccountRecovery,
  withTranslation("resetPassword")
])(ResetPassword2);
