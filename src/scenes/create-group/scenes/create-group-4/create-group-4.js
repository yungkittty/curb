import React, { Component } from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { withTranslation } from "react-i18next";
import AppModalSceneTitle from "../../../../components/app-modal-scene-title";
import CreateGroupError from "../../components/create-group-error";
import ListFlat from "../../../../components/list-flat";
import AppModalListItem from "../../../../components/app-modal-list-item";
import Loader from "../../../../components/loader";
import themesData from "./create-group-4-themes-data";
/* eslint-disable-next-line */
import CreateGroup3 from "../create-group-3";

class CreateGroup4 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton
    } = this.props;

    this.state = { isLoading: false };

    this.listFlat = React.createRef();

    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ currentStep: 4, steps: 4 });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: CreateGroup3, direction: -1 })
    });
    setAppModalFooterButton({ text: t("common:finish"), onClick: this.submit });
  }

  submit() {
    if (!this.checkForm()) {
      const { current: listFlat } = this.listFlat;
      listFlat.scrollToOffset({ offset: 0 });
      return;
    }

    const { postGroup, history, groupName, discoverability, modules, groupTheme } = this.props;
    postGroup({
      history,
      name: groupName.value,
      status: discoverability.value,
      mediaTypes: modules.value,
      theme: groupTheme.value
    });

    this.setState({ isLoading: true });

    const { setAppModalHeaderLeftButton, setAppModalHeaderRightButton } = this.props;
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: () => undefined });
    setAppModalHeaderRightButton({ icon: "times", onClick: () => undefined });
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
      groupTheme: { value, error }
    } = this.props;
    const { isLoading } = this.state;

    return isLoading ? (
      <Loader />
    ) : (
      <ListFlat
        ref={this.listFlat}
        contentContainerStyle={{ position: "relative" }}
        data={themesData}
        extraData={{ value }}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <React.Fragment>
            <AppModalSceneTitle>{t("theme")}</AppModalSceneTitle>
            <CreateGroupError>{error && t(`validation:theme.${error}`)}</CreateGroupError>
          </React.Fragment>
        )}
        renderItem={({ item }) => (
          <AppModalListItem
            title={t(`themeList.${item.id}`)}
            titleColor="#ffffff"
            backgroundColor={theme[item.themeColor]}
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

CreateGroup4.defaultProps = {
  groupName: { value: "", error: undefined },
  discoverability: { value: undefined, error: undefined },
  modules: { value: [], error: undefined },
  groupTheme: { value: "", error: undefined }
};

CreateGroup4.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalHeaderRightButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
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
  t: PropTypes.func.isRequired
};

export default withTheme(withRouter(withTranslation("createGroup")(CreateGroup4)));
