import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import CreateGroupContainer from "../../components/create-group-container";
import CreateGroupTitle from "../../components/create-group-title";
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

    setAppModalHeaderSteps({ headerCurrentStep: 2, headerSteps: 4 });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: CreateGroup1, sceneDirection: -1 })
    });
    setAppModalFooterButton({
      footerText: t("common:next"),
      footerOnClick: this.goToNext
    });
  }

  goToNext() {
    const { setAppModalScene } = this.props;
    if (this.checkForm())
      setAppModalScene({ scene: CreateGroup3, sceneDirection: 1 });
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
      <CreateGroupContainer>
        <CreateGroupTitle type="h2" weight={700}>
          {t("discoverability")}
        </CreateGroupTitle>
        {error && (
          <CreateGroupError>
            {t(`validation:discoverability.${error}`)}
          </CreateGroupError>
        )}
        <CreateGroup2Discover
          onClick={this.handleChange}
          discoverability={value}
        />
      </CreateGroupContainer>
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
