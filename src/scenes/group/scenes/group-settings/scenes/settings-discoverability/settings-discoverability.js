import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import withAppModal from "../../../../../../hocs/with-app-modal";
import Loader from "../../../../../../components/loader";
import AppModalSceneContainer from "../../../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import AppModalSceneError from "../../../../../../components/app-modal-scene-error";
import GroupDiscoverability from "../../../../components/group-discoverability";
/* eslint-disable-next-line */
import GroupSettings from "../../group-settings";

class SettingsDiscoverability extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton,
      setAppModalSceneData,
      groupStatus
    } = this.props;

    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: GroupSettings, direction: -1 })
    });
    setAppModalFooterButton({ text: t("common:edit"), onClick: this.submit });

    setAppModalSceneData({ newGroupStatus: { value: groupStatus, error: undefined } });
  }

  componentDidUpdate(prevProps) {
    const { isPatchGroupFetching, enableAppModalButtons, disableAppModalButtons } = this.props;
    if (prevProps.isPatchGroupFetching === isPatchGroupFetching) return;
    if (isPatchGroupFetching) disableAppModalButtons();
    else enableAppModalButtons();
  }

  submit() {
    const {
      patchGroup,
      groupId,
      newGroupStatus: { value },
      groupStatus
    } = this.props;
    if (this.checkForm() && value !== groupStatus) patchGroup({ id: groupId, status: value });
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
      isPatchGroupFetching,
      newGroupStatus: { value, error }
    } = this.props;
    return isPatchGroupFetching ? (
      <Loader />
    ) : (
      <AppModalSceneContainer>
        <AppModalSceneTitle>{t("discoverability.title")}</AppModalSceneTitle>
        <AppModalSceneError>{error && t(`validation:discoverability.${error}`)}</AppModalSceneError>
        <GroupDiscoverability onClick={this.handleChange} discoverability={value} />
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
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  isPatchGroupFetching: PropTypes.bool.isRequired,
  patchGroup: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  newGroupStatus: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }),
  groupStatus: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default _.flow([withAppModal, withTranslation("groupSettings")])(SettingsDiscoverability);
