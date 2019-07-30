import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../../../components/loader";
import AppModalSceneContainer from "../../../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import AppModalSceneError from "../../../../../../components/app-modal-scene-error";
import GroupDiscoverability from "../../../../components/group-discoverability";
import withAppModal from "../../../../../../hocs/with-app-modal";
import withGroup from "../../../../../../hocs/with-group";
/* eslint-disable-next-line */
import GroupSettings from "../../group-settings";

class SettingsDiscoverability extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderLeftButtons,
      setAppModalHeaderBackButton,
      setAppModalScene,
      setAppModalSceneData,
      setAppModalFooterButton,
      groupStatus
    } = this.props;

    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderLeftButtons([{ icon: "arrow-left", onClick: () => setAppModalScene({ scene: GroupSettings, direction: -1 }) }]);
    setAppModalHeaderBackButton({ onClick: () => setAppModalScene({ scene: GroupSettings, direction: -1 }) });
    setAppModalSceneData({ newGroupStatus: { value: groupStatus, error: undefined } });
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
      patchGroup,
      groupId,
      newGroupStatus: { value },
      groupStatus
    } = this.props;
    if (this.checkForm() && value !== groupStatus) {
      patchGroup({
        id: groupId,
        status: value
      });
    }
  }

  checkForm() {
    const {
      newGroupStatus: { value }
    } = this.props;
    return this.checkInput("newGroupStatus", value);
  }

  checkInput(id, value) {
    const error = value === undefined ? "missing" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(clickValue) {
    const {
      newGroupStatus: { value }
    } = this.props;
    const newValue = clickValue === value ? undefined : clickValue;
    this.checkInput("newGroupStatus", newValue);
  }

  render() {
    const {
      t,
      isFetchingGroups,
      newGroupStatus: { value, error }
    } = this.props;
    return isFetchingGroups ? (
      <Loader />
    ) : (
      <AppModalSceneContainer>
        <AppModalSceneTitle>
          {/* eslint-disable-line */}
          {t("discoverability.title")}
        </AppModalSceneTitle>
        <AppModalSceneError>
          {/* eslint-disable-line */}
          {error && t(`validation:discoverability.${error}`)}
        </AppModalSceneError>
        <GroupDiscoverability
          // eslint-disable-line
          onClick={this.handleChange}
          discoverability={value}
        />
      </AppModalSceneContainer>
    );
  }
}

SettingsDiscoverability.defaultProps = {
  newGroupStatus: { value: undefined, error: undefined }
};

SettingsDiscoverability.propTypes = {
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
  groupStatus: PropTypes.string.isRequired,
  newGroupStatus: PropTypes.shape({ value: PropTypes.string, error: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withGroup,
  withTranslation("groupSettings")
])(SettingsDiscoverability);
