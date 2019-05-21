import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { withTranslation } from "react-i18next";
import { withTheme } from "styled-components";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import GroupCreateError from "../../../../components/group-create-error";
import ListFlat from "../../../../../../components/list-flat";
import AppModalSceneListItem from "../../../../../../components/app-modal-scene-list-item";
import Loader from "../../../../../../components/loader";
import GroupCreate3 from "../group-create-3"; // eslint-disable-line
import groupCreate4ThemesData from "./group-create-4-themes-data";
import withAppModal from "../../../../../../hocs/with-app-modal";

class GroupCreate4 extends Component {
  constructor(props) {
    super(props);
    const {
      // eslint-disble-line
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalFooterButton,
      t
    } = this.props;

    this.listFlat = React.createRef();

    this.goToPrev = this.goToPrev.bind(this);
    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ currentStep: 4, steps: 4 });
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: this.goToPrev });
    setAppModalFooterButton({ text: t("common:finish"), onClick: this.submit });
  }

  componentDidUpdate(prevProps) {
    const { isFetchingGroups, enableAppModalButtons, disableAppModalButtons } = this.props;
    if (prevProps.isFetchingGroups === isFetchingGroups) return;
    if (isFetchingGroups) disableAppModalButtons();
    else enableAppModalButtons();
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: GroupCreate3, direction: -1 });
  }

  submit() {
    if (!this.checkForm()) {
      const { current: listFlat } = this.listFlat;
      listFlat.scrollToOffset({ offset: 0 });
      return;
    }

    const {
      // eslint-disable-line
      postGroup,
      history,
      groupName,
      discoverability,
      modules,
      groupTheme,
      avatar
    } = this.props;

    postGroup({
      history,
      name: groupName.value,
      status: discoverability.value,
      mediaTypes: modules.value,
      theme: groupTheme.value,
      avatar: avatar.value
    });
  }

  checkForm() {
    const {
      groupTheme: { value }
    } = this.props;
    return this.checkInput("groupTheme", value);
  }

  checkInput(id, value) {
    const error = value.length === 0 ? "missing" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(clickValue) {
    const {
      groupTheme: { value }
    } = this.props;
    const newValue = clickValue === value ? "" : clickValue;
    this.checkInput("groupTheme", newValue);
  }

  render() {
    const {
      t,
      theme,
      isFetchingGroups,
      groupTheme: { value, error }
    } = this.props;

    return isFetchingGroups ? (
      <Loader />
    ) : (
      <ListFlat
        ref={this.listFlat}
        contentContainerStyle={{ position: "relative" }}
        data={groupCreate4ThemesData}
        extraData={{ value }}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <React.Fragment>
            <AppModalSceneTitle>
              {/* eslint-disable-line */}
              {t("theme")}
            </AppModalSceneTitle>
            <GroupCreateError>
              {/* eslint-disable-line */}
              {error && t(`validation:theme.${error}`)}
            </GroupCreateError>
          </React.Fragment>
        )}
        renderItem={({ item }) => (
          <AppModalSceneListItem
            title={t(`themeList.${item.id}`)}
            titleColor="#ffffff"
            backgroundColor={theme[item.themeColor]}
            normalHoverColor
            selected={item.id === value}
            selectionType
            selectedColorAlternate
            onClick={() => this.handleChange(item.id)}
          />
        )}
      />
    );
  }
}

GroupCreate4.defaultProps = {
  groupName: { value: "", error: undefined },
  discoverability: { value: undefined, error: undefined },
  modules: { value: [], error: undefined },
  groupTheme: { value: "", error: undefined },
  avatar: { value: { data: undefined, file: undefined }, error: undefined }
};

GroupCreate4.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  isFetchingGroups: PropTypes.bool.isRequired,
  hideAppModal: PropTypes.func.isRequired,
  postGroup: PropTypes.func.isRequired,
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  // eslint-disable-next-line
  history: PropTypes.object.isRequired,
  groupName: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }),
  discoverability: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }),
  modules: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string),
    error: PropTypes.string
  }),
  groupTheme: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string
  }),
  avatar: PropTypes.shape({
    value: PropTypes.shape({ data: PropTypes.string, file: PropTypes.object }),
    error: PropTypes.string
  }),
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withRouter,
  withTranslation("groupCreate"),
  withTheme
])(GroupCreate4);
