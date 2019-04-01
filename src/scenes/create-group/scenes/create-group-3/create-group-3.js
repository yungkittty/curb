import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import CreateGroupContainer from "../../components/create-group-container";
import CreateGroupTitle from "../../components/create-group-title";
import CreateGroupError from "../../components/create-group-error";
import CreateGroup3Modules from "./components/create-group-3-modules";
/* eslint-disable */
import CreateGroup2 from "../create-group-2";
import CreateGroup4 from "../create-group-4";
/* eslint-enable */

class CreateGroup3 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton
    } = this.props;

    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.goToNext = this.goToNext.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ headerCurrentStep: 3, headerSteps: 4 });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: CreateGroup2, sceneDirection: -1 })
    });
    setAppModalFooterButton({
      footerText: t("common:next"),
      footerOnClick: this.goToNext
    });
  }

  goToNext() {
    const { setAppModalScene } = this.props;
    if (this.checkForm())
      setAppModalScene({ scene: CreateGroup4, sceneDirection: 1 });
  }

  checkForm() {
    const {
      modules: { value }
    } = this.props;
    return this.checkInput("modules", value);
  }

  checkInput(id, value) {
    const error = value.length === 0 ? "missing" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(clickValue) {
    const {
      modules: { value }
    } = this.props;
    const newValue = value;
    if (_.includes(newValue, clickValue)) _.pull(newValue, clickValue);
    else newValue.push(clickValue);
    this.checkInput("modules", newValue);
  }

  render() {
    const {
      t,
      modules: { value, error }
    } = this.props;

    return (
      <CreateGroupContainer>
        <CreateGroupTitle type="h2" weight={700}>
          {t("modules")}
        </CreateGroupTitle>
        {error && (
          <CreateGroupError>
            {t(`validation:modules.${error}`)}
          </CreateGroupError>
        )}
        <CreateGroup3Modules onClick={this.handleChange} modules={value} />
      </CreateGroupContainer>
    );
  }
}

CreateGroup3.defaultProps = {
  modules: { value: [], error: undefined }
};

CreateGroup3.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  modules: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string),
    error: PropTypes.string
  }),
  t: PropTypes.func.isRequired
};

export default withTranslation("createGroup")(CreateGroup3);
