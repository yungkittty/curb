import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AppModalSceneContainer from "../../../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import AppModalSceneError from "../../../../../../components/app-modal-scene-error";
import GroupDiscoverability from "../../../../components/group-discoverability";
import GroupCreate1 from "../group-create-1"; // eslint-disable-line
import GroupCreate3 from "../group-create-3"; // eslint-disable-line
import withAppModal from "../../../../../../hocs/with-app-modal";

class GroupCreate2 extends Component {
  constructor(props) {
    super(props);
    const {
      // eslint-disable-line
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

    setAppModalHeaderSteps({ currentStep: 2, steps: 4 });
    setAppModalHeaderLeftButtons([{ icon: "arrow-left", onClick: this.goToPrev }]);
    setAppModalHeaderBackButton({ onClick: this.goToPrev });
    setAppModalFooterButton({ text: t("common:next"), onClick: this.goToNext });
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: GroupCreate1, direction: -1 });
  }

  goToNext() {
    const { setAppModalScene } = this.props;
    if (this.checkForm()) setAppModalScene({ scene: GroupCreate3, direction: 1 });
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
        <AppModalSceneTitle>
          {/* eslint-disable-line */}
          {t("discoverability")}
        </AppModalSceneTitle>
        <AppModalSceneError>
          {/* eslint-disable-line */}
          {error && t(`validation:discoverability.${error}`)}
        </AppModalSceneError>
        <GroupDiscoverability onClick={this.handleChange} discoverability={value} />
      </AppModalSceneContainer>
    );
  }
}

GroupCreate2.defaultProps = {
  discoverability: { value: undefined, error: undefined }
};

GroupCreate2.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButtons: PropTypes.func.isRequired,
  setAppModalHeaderBackButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  discoverability: PropTypes.shape({ value: PropTypes.string, error: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTranslation("groupCreate")
])(GroupCreate2);
