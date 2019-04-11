import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AppModalSceneContainer from "../../../../components/app-modal-scene-container";
import AppModalTitle from "../../../../components/app-modal-title";
import SelectImage from "./components/select-image";
import InputForm from "../../../../components/input-form";
/* eslint-disable-next-line */
import CreateGroup2 from "../create-group-2";

class CreateGroup1 extends Component {
  constructor(props) {
    super(props);
    const { t, setAppModalHeaderSteps, setAppModalFooterButton } = this.props;

    this.goToNext = this.goToNext.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ headerCurrentStep: 1, headerSteps: 4 });
    setAppModalFooterButton({
      footerText: t("common:next"),
      footerOnClick: this.goToNext
    });
  }

  goToNext() {
    const { setAppModalScene } = this.props;
    if (this.checkForm())
      setAppModalScene({ scene: CreateGroup2, sceneDirection: 1 });
  }

  checkForm() {
    const {
      groupName: { value }
    } = this.props;
    return this.checkInput("groupName", value);
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
      groupName: { value, error }
    } = this.props;

    return (
      <AppModalSceneContainer>
        <AppModalTitle>{t("createGroup")}</AppModalTitle>
        <SelectImage />
        <InputForm
          size="modal"
          id="groupName"
          placeholder={t("groupName")}
          onChange={this.handleChange}
          value={value}
          error={error && t(`validation:groupName.${error}`)}
        />
      </AppModalSceneContainer>
    );
  }
}

CreateGroup1.defaultProps = {
  groupName: { value: "", error: undefined }
};

CreateGroup1.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  groupName: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }),
  t: PropTypes.func.isRequired
};

export default withTranslation("createGroup")(CreateGroup1);
