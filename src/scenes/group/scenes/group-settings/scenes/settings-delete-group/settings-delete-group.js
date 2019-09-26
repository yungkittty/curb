import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router";
import Loader from "../../../../../../components/loader";
import AppModalSceneContainer from "../../../../../../components/app-modal-scene-container";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import ContentDescription from "./components/content-description";
import withAppModal from "../../../../../../hocs/with-app-modal";
import withGroup from "../../../../../../hocs/with-group";
// eslint-disable-next-line
import GroupSettings from "../../../group-settings";

class SettingsDeleteGroup extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderLeftButtons,
      setAppModalHeaderBackButton,
      setAppModalScene,
      setAppModalFooterButton,
      deleteGroup,
      groupId,
      history
    } = this.props;

    setAppModalHeaderLeftButtons([{ icon: "arrow-left", onClick: () => setAppModalScene({ scene: GroupSettings, direction: -1 }) }]);
    setAppModalHeaderBackButton({ onClick: () => setAppModalScene({ scene: GroupSettings, direction: -1 }) });
    setAppModalFooterButton({ text: t("deleteGroup.buttonTitle"), onClick: () => deleteGroup({ id: groupId, history }) });
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

  render() {
    const { t, isFetchingGroups } = this.props;

    return isFetchingGroups ? (
      <Loader />
    ) : (
      <AppModalSceneContainer>
        <AppModalSceneTitle>
          {/* eslint-disable-line */}
          {t("deleteGroup.contentTitle")}
        </AppModalSceneTitle>
        <ContentDescription type="h4" isIndented>
          {/* eslint-disable-line */}
          {t("deleteGroup.contentDescription")}
        </ContentDescription>
      </AppModalSceneContainer>
    );
  }
}

SettingsDeleteGroup.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderLeftButtons: PropTypes.func.isRequired,
  setAppModalHeaderBackButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  isFetchingGroups: PropTypes.bool.isRequired,
  deleteGroup: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withGroup,
  withRouter,
  withTranslation("groupSettings")
])(SettingsDeleteGroup);
