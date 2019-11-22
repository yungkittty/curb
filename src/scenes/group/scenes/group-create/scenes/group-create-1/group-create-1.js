import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AppModalSceneContainer from "../../../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import ImageAvatarEditable from "../../../../../../components/image-avatar-editable";
import GroupCreate2 from "../group-create-2"; // eslint-disable-line
import InputForm from "../../../../../../components/input-form";
import inputRegex from "../../../../../../utils/input-regex";
import withAppModal from "../../../../../../hocs/with-app-modal";
import groupCategories from "../../../../utils/group-categories";

class GroupCreate1 extends Component {
  constructor(props) {
    super(props);
    const { t, setAppModalHeaderSteps, setAppModalFooterButton } = this.props;

    this.goToNext = this.goToNext.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ currentStep: 1, steps: 5 });
    setAppModalFooterButton({ text: t("common:next"), onClick: this.goToNext });
  }

  goToNext() {
    const { setAppModalScene } = this.props;
    if (this.checkForm()) setAppModalScene({ scene: GroupCreate2, direction: 1 });
  }

  checkForm() {
    const { groupName, groupCategory } = this.props;
    const groupNameCheck = this.checkInput("groupName", groupName.value);
    const groupCategoryCheck = this.checkInput("groupCategory", groupCategory.value);
    return groupNameCheck && groupCategoryCheck;
  }

  checkInput(id, value) {
    let error = value.length === 0 ? "missing" : undefined;
    if (id === "groupName" && error === undefined)
      error = !RegExp(inputRegex.groupName).test(value) ? "invalid" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.checkInput(id, value);
  }

  render() {
    const { t, groupName, groupCategory, avatar } = this.props;
    return (
      <AppModalSceneContainer>
        <AppModalSceneTitle style={{ marginBottom: 40 }}>
          {/* eslint-disable-line */}
          {t("groupCreate:groupCreate")}
        </AppModalSceneTitle>
        <ImageAvatarEditable
          editMode
          id="avatar"
          size="extra-large"
          data={avatar.value.data}
          onSelect={this.handleChange}
        />
        <InputForm
          size="modal"
          id="groupName"
          placeholder={t("groupName")}
          onChange={this.handleChange}
          value={groupName.value}
          error={groupName.error && t(`validation:groupName.${groupName.error}`)}
        />
        <InputForm
          inputType="dropdown"
          size="modal"
          id="groupCategory"
          placeholder={t("groupCategory")}
          onChange={this.handleChange}
          value={groupCategory.value}
          error={groupCategory.error && t(`validation:groupCategory.${groupCategory.error}`)}
          options={_.map(groupCategories, item => ({
            key: item,
            value: t(`groupOptions:groupCategoryOptions.${item}`)
          }))}
        />
      </AppModalSceneContainer>
    );
  }
}

GroupCreate1.defaultProps = {
  groupName: { value: "", error: undefined },
  groupCategory: { value: "", error: undefined },
  avatar: { value: { data: undefined, file: undefined }, error: undefined }
};

GroupCreate1.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  groupName: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }),
  groupCategory: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }),
  avatar: PropTypes.shape({ value: PropTypes.object, error: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTranslation("groupOptions")
])(GroupCreate1);
