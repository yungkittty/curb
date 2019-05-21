import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router";
import withAppModal from "../../../../../../hocs/with-app-modal";
import Loader from "../../../../../../components/loader";
import AppModalSceneContainer from "../../../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import ContentDescription from "./components/content-description";
// eslint-disable-next-line
import GroupSettings from "../../../group-settings";

class SettingsDeleteGroup extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton,
      deleteGroup,
      groupId,
      history
    } = this.props;

    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: GroupSettings, direction: -1 })
    });
    setAppModalFooterButton({
      text: t("deleteGroup.buttonTitle"),
      onClick: () => deleteGroup({ id: groupId, history })
    });
  }

  componentDidUpdate(prevProps) {
    const { isDeleteGroupFetching, enableAppModalButtons, disableAppModalButtons } = this.props;
    if (prevProps.isDeleteGroupFetching === isDeleteGroupFetching) return;
    if (isDeleteGroupFetching) disableAppModalButtons();
    else enableAppModalButtons();
  }

  render() {
    const { t, isDeleteGroupFetching } = this.props;

    return isDeleteGroupFetching ? (
      <Loader />
    ) : (
      <AppModalSceneContainer>
        <AppModalSceneTitle>{t("deleteGroup.contentTitle")}</AppModalSceneTitle>
        <ContentDescription type="h4">{t("deleteGroup.contentDescription")}</ContentDescription>
      </AppModalSceneContainer>
    );
  }
}

SettingsDeleteGroup.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  isDeleteGroupFetching: PropTypes.bool.isRequired,
  deleteGroup: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
  t: PropTypes.func.isRequired
};

export default _.flow([withAppModal, withRouter, withTranslation("groupSettings")])(SettingsDeleteGroup);
