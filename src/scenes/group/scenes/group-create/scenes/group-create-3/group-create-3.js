import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AppModalSceneContainer from "../../../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import AppModalSceneError from "../../../../../../components/app-modal-scene-error";
import GroupCreate2 from "../group-create-2"; // eslint-disable-line
import GroupCreate4 from "../group-create-4"; // eslint-disable-line
import withAppModal from "../../../../../../hocs/with-app-modal";
import InputForm from "../../../../../../components/input-form";

class GroupCreate3 extends Component {
  constructor(props) {
    super(props);
    const {
      disableAppModalEnterEvent,
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButtons,
      setAppModalHeaderBackButton,
      setAppModalFooterButton,
      t
    } = this.props;

    this.goToPrev = this.goToPrev.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    disableAppModalEnterEvent();
    setAppModalHeaderSteps({ currentStep: 3, steps: 5 });
    setAppModalHeaderLeftButtons([{ icon: "arrow-left", onClick: this.goToPrev }]);
    setAppModalHeaderBackButton({ onClick: this.goToPrev });
    setAppModalFooterButton({ text: t("common:next"), onClick: this.goToNext });
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: GroupCreate2, direction: -1 });
  }

  goToNext() {
    const { setAppModalScene } = this.props;
    if (this.checkForm()) setAppModalScene({ scene: GroupCreate4, direction: 1 });
  }

  checkForm() {
    const {
      groupDescription: { value }
    } = this.props;
    return this.checkInput("groupDescription", value);
  }

  checkInput(id, value) {
    const error = value.length === 0 ? "missing" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const {
      t,
      groupDescription: { value, error }
    } = this.props;
    return (
      <AppModalSceneContainer>
        <AppModalSceneTitle>
          {/* eslint-disable-line */}
          {t("groupDescription")}
        </AppModalSceneTitle>
        <AppModalSceneError>
          {/* eslint-disable-line */}
          {error && t(`validation:description.${error}`)}
        </AppModalSceneError>
        <InputForm
          id="groupDescription"
          placeholder={t("groupCreate:groupDescriptionPlaceholder")}
          isPlaceholderStatic
          value={value}
          onChange={this.handleChange}
          maxLength={250}
          containerStyle={{
            display: "flex",
            width: "100%",
            marginTop: 0,
            borderBottomWidth: 0,
            flex: 1
          }}
          isMultiline
        />
      </AppModalSceneContainer>
    );
  }
}

GroupCreate3.defaultProps = {
  groupDescription: { value: "", error: undefined }
};

GroupCreate3.propTypes = {
  disableAppModalEnterEvent: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButtons: PropTypes.func.isRequired,
  setAppModalHeaderBackButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  groupDescription: PropTypes.shape({ value: PropTypes.string, error: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTranslation("groupOptions")
])(GroupCreate3);
