import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../components/app-modal-scene-title";
import CreateGroupError from "../../components/create-group-error";
import CreateGroup2Discover from "./components/create-group-2-discover";
/* eslint-disable */
import CreateGroup1 from "../create-group-1";
import CreateGroup3 from "../create-group-3";
/* eslint-enable */

class CreateGroup2 extends Component {
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

    setAppModalHeaderSteps({ currentStep: 2, steps: 4 });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: CreateGroup1, direction: -1 })
    });
    setAppModalFooterButton({ text: t("common:next"), onClick: this.goToNext });
  }

  goToNext() {
    const { setAppModalScene } = this.props;
    if (this.checkForm()) setAppModalScene({ scene: CreateGroup3, direction: 1 });
  }

  checkForm() {
    const {
      discoverability: { value }
    } = this.props;
    return this.checkInput("discoverability", value);
  }

  checkInput(id, value) {
    const error = value === undefined ? "missing" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(clickValue) {
    const {
      discoverability: { value }
    } = this.props;
    const newValue = clickValue === value ? undefined : clickValue;
    this.checkInput("discoverability", newValue);
  }

  render() {
    const {
      t,
      discoverability: { value, error }
    } = this.props;

    return (
      <AppModalSceneContainer>
        <AppModalSceneTitle>{t("discoverability")}</AppModalSceneTitle>
        <CreateGroupError>{error && t(`validation:discoverability.${error}`)}</CreateGroupError>
        <CreateGroup2Discover onClick={this.handleChange} discoverability={value} />
      </AppModalSceneContainer>
    );
  }
}

CreateGroup2.defaultProps = {
  discoverability: { value: undefined, error: undefined }
};

CreateGroup2.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  discoverability: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }),
  t: PropTypes.func.isRequired
};

export default withTranslation("createGroup")(CreateGroup2);
