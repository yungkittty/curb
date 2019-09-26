import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../../../components/loader";
import AppModalSceneContainer from "../../../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import AppModalSceneError from "../../../../../../components/app-modal-scene-error";
import withAppModal from "../../../../../../hocs/with-app-modal";
import InputForm from "../../../../../../components/input-form";
/* eslint-disable-next-line */
import GroupSettings from "../../group-settings";
import withGroup from "../../../../../../hocs/with-group";

class SettingsDescription extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      disableAppModalEnterEvent,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton,
      setAppModalSceneData,
      groupDescription
    } = this.props;

    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    disableAppModalEnterEvent();
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: GroupSettings, direction: -1 })
    });
    setAppModalFooterButton({ text: t("common:edit"), onClick: this.submit });
    setAppModalSceneData({ newGroupDescription: { value: groupDescription, error: undefined } });
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
      patchGroup,
      groupId,
      newGroupDescription: { value },
      groupDescription
    } = this.props;
    if (this.checkForm() && value !== groupDescription) {
      patchGroup({
        id: groupId,
        description: value
      });
    }
  }

  checkForm() {
    const {
      newGroupDescription: { value }
    } = this.props;
    return this.checkInput("newGroupDescription", value);
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
      isFetchingGroups,
      newGroupDescription: { value, error }
    } = this.props;
    return isFetchingGroups ? (
      <Loader />
    ) : (
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
          id="newGroupDescription"
          placeholder={t("groupCreate:groupDescriptionPlaceholder")}
          isPlaceholderStatic
          value={value}
          onChange={this.handleChange}
          valueMaxLength={300}
          containerStyle={{ display: "flex", width: "100%", margin: 0, border: 0, flex: 1 }}
          isMultiline
        />
      </AppModalSceneContainer>
    );
  }
}

SettingsDescription.defaultProps = {
  newGroupDescription: { value: "", error: undefined }
};

SettingsDescription.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalEnterEvent: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  isFetchingGroups: PropTypes.bool.isRequired,
  patchGroup: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  groupDescription: PropTypes.string.isRequired,
  newGroupDescription: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withGroup,
  withTranslation("groupOptions")
])(SettingsDescription);
