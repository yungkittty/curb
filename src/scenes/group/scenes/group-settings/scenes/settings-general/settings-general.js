import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../../../components/loader";
import AppModalSceneContainer from "../../../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import ImageAvatarEditable from "../../../../../../components/image-avatar-editable";
import InputForm from "../../../../../../components/input-form";
import inputRegex from "../../../../../../utils/input-regex";
import withAppModal from "../../../../../../hocs/with-app-modal";
import withGroup from "../../../../../../hocs/with-group";
/* eslint-disable-next-line */
import GroupSettings from "../../group-settings";
import groupCategories from "../../../../utils/group-categories";

class SettingsGeneral extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderLeftButtons,
      setAppModalHeaderBackButton,
      setAppModalScene,
      setAppModalSceneData,
      setAppModalFooterButton,
      groupName
    } = this.props;

    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderLeftButtons([{ icon: "arrow-left", onClick: () => setAppModalScene({ scene: GroupSettings, direction: -1 }) }]);
    setAppModalHeaderBackButton({ onClick: () => setAppModalScene({ scene: GroupSettings, direction: -1 }) });
    setAppModalSceneData({ newGroupName: { value: groupName, error: undefined } });
    setAppModalFooterButton({ text: t("common:edit"), onClick: this.submit });
  }

  componentDidUpdate(prevProps) {
    const {
      // eslint-disable-line
      isFetchingGroups,
      enableAppModalButtons,
      disableAppModalButtons
    } = this.props;
    if (prevProps.isFetchingGroups === isFetchingGroups) return;
    if (isFetchingGroups) disableAppModalButtons();
    else enableAppModalButtons();
  }

  submit() {
    const {
      // eslint-disable-line
      patchGroup,
      groupId,
      avatar,
      groupName,
      newGroupName,
      groupCategory,
      newGroupCategory
    } = this.props;
    if (this.checkForm()) {
      patchGroup({
        id: groupId,
        avatar: avatar.value.file && avatar.value,
        name: newGroupName.value !== groupName ? newGroupName.value : undefined,
        category: newGroupCategory.value !== groupCategory ? newGroupCategory.value : undefined
      });
    }
  }

  checkForm() {
    const {
      newGroupName: { value }
    } = this.props;
    return this.checkInput("newGroupName", value);
  }

  checkInput(id, value) {
    let error = value.length === 0 ? "missing" : undefined;
    if (id === "newGroupName" && error === undefined)
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
    const {
      // eslint-disable-line
      t,
      isFetchingGroups,
      groupId,
      avatar,
      groupName,
      newGroupName,
      groupCategory,
      newGroupCategory
    } = this.props;
    return isFetchingGroups ? (
      <Loader />
    ) : (
      <AppModalSceneContainer>
        <AppModalSceneTitle>
          {/* eslint-disable-line */}
          {t("groupSettings:general.title")}
        </AppModalSceneTitle>
        <ImageAvatarEditable
          editMode
          id="avatar"
          size="extra-large"
          shouldFetch={false}
          groupId={groupId}
          data={avatar.value.data}
          onSelect={this.handleChange}
        />
        <InputForm
          containerStyle={{ marginTop: 60 }}
          size="modal"
          id="newGroupName"
          placeholder={t("groupName")}
          onChange={this.handleChange}
          value={newGroupName.value !== undefined ? newGroupName.value : groupName}
          error={newGroupName.error && t(`validation:groupName.${newGroupName.error}`)}
        />
        <InputForm
          inputType="dropdown"
          size="modal"
          id="newGroupCategory"
          placeholder={t("groupCategory")}
          onChange={this.handleChange}
          value={newGroupCategory.value !== undefined ? newGroupCategory.value : groupCategory}
          error={newGroupCategory.error && t(`validation:groupCategory.${newGroupCategory.error}`)}
          options={_.map(groupCategories, item => ({
            key: item,
            value: t(`groupCategoryOptions.${item}`)
          }))}
        />
      </AppModalSceneContainer>
    );
  }
}

SettingsGeneral.defaultProps = {
  avatar: { value: { data: undefined, file: undefined }, error: undefined },
  newGroupName: { value: undefined, error: undefined },
  newGroupCategory: { value: undefined, error: undefined }
};

SettingsGeneral.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderLeftButtons: PropTypes.func.isRequired,
  setAppModalHeaderBackButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  isFetchingGroups: PropTypes.bool.isRequired,
  patchGroup: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  avatar: PropTypes.shape({ value: PropTypes.object, error: PropTypes.string }),
  groupName: PropTypes.string.isRequired,
  newGroupName: PropTypes.shape({ value: PropTypes.string, error: PropTypes.string }),
  groupCategory: PropTypes.string.isRequired,
  newGroupCategory: PropTypes.shape({ value: PropTypes.string, error: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withGroup,
  withTranslation("groupOptions")
])(SettingsGeneral);
