import _ from "lodash";
import React, { Component } from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../../../components/loader";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import AppModalSceneError from "../../../../../../components/app-modal-scene-error";
import AppModalSceneList from "../../../../../../components/app-modal-scene-list";
import AppModalSceneListItem from "../../../../../../components/app-modal-scene-list-item";
import settingsThemeData from "./settings-theme-data";
import withAppModal from "../../../../../../hocs/with-app-modal";
import withGroup from "../../../../../../hocs/with-group";
/* eslint-disable-next-line */
import GroupSettings from "../../group-settings";

class SettingsTheme extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderLeftButtons,
      setAppModalHeaderBackButton,
      setAppModalScene,
      setAppModalSceneData,
      setAppModalFooterButton,
      groupTheme
    } = this.props;

    this.listFlat = React.createRef();

    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderLeftButtons([{ icon: "arrow-left", onClick: () => setAppModalScene({ scene: GroupSettings, direction: -1 }) }]);
    setAppModalHeaderBackButton({ onClick: () => setAppModalScene({ scene: GroupSettings, direction: -1 }) });
    setAppModalSceneData({ newGroupTheme: { value: groupTheme, error: undefined } });
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
      newGroupTheme: { value },
      groupTheme
    } = this.props;
    if (this.checkForm() && value !== groupTheme) patchGroup({ id: groupId, theme: value });
    else {
      const { current: listFlat } = this.listFlat;
      listFlat.scrollToOffset({ offset: 0 });
    }
  }

  checkForm() {
    const {
      newGroupTheme: { value }
    } = this.props;
    return this.checkInput("newGroupTheme", value);
  }

  checkInput(id, value) {
    const error = value.length === 0 ? "missing" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(clickValue) {
    const {
      newGroupTheme: { value }
    } = this.props;
    const newValue = clickValue === value ? "" : clickValue;
    this.checkInput("newGroupTheme", newValue);
  }

  render() {
    const {
      t,
      isFetchingGroups,
      theme,
      newGroupTheme: { value, error }
    } = this.props;

    return isFetchingGroups ? (
      <Loader />
    ) : (
      <AppModalSceneList
        ref={this.listFlat}
        data={settingsThemeData}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <React.Fragment>
            <AppModalSceneTitle>
              {/* eslint-disable-line */}
              {t("theme.title")}
            </AppModalSceneTitle>
            <AppModalSceneError>
              {/* eslint-disable-line */}
              {error && t(`validation:theme.${error}`)}
            </AppModalSceneError>
          </React.Fragment>
        )}
        renderItem={({ item }) => (
          <AppModalSceneListItem
            title={t(`themeList.${item.id}`)}
            titleColor="#ffffff"
            backgroundColor={theme[`group${_.capitalize(item.id)}Color`]}
            selected={item.id === value}
            normalHoverColor
            selectionType
            selectedColorAlternate
            onClick={() => this.handleChange(item.id)}
          />
        )}
      />
    );
  }
}

SettingsTheme.defaultProps = {
  newGroupTheme: { value: "", error: undefined }
};

SettingsTheme.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderLeftButtons: PropTypes.func.isRequired,
  setAppModalHeaderBackButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  isFetchingGroups: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  patchGroup: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  newGroupTheme: PropTypes.shape({ value: PropTypes.string, error: PropTypes.string }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withGroup,
  withTheme,
  withTranslation("groupSettings")
])(SettingsTheme);
