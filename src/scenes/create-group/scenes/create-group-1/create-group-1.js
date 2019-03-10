import React, { Component } from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import CreateGroupContainer from "../../components/create-group-container";
import CreateGroupTitle from "../../components/create-group-title";
import SelectImage from "./components/select-image";
import Input from "../../../../components/input";
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
      <CreateGroupContainer>
        <CreateGroupTitle type="h2" weight={700}>
          {t("createGroup")}
        </CreateGroupTitle>
        <SelectImage />
        <Input
          size="modal"
          id="groupName"
          placeholder={t("groupName")}
          onChange={this.handleChange}
          value={value}
          error={error && t(`validation:groupName.${error}`)}
        />
      </CreateGroupContainer>
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

export default withNamespaces("createGroup")(CreateGroup1);
