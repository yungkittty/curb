import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AppModalTitle from "../../../../components/app-modal-title";
import CreateGroupError from "../../components/create-group-error";
import ListFlat from "../../../../components/list-flat";
import ModalListItem from "../../../../components/modal-list-item";
import modulesData from "./create-group-3-modules-data";
/* eslint-disable */
import CreateGroup2 from "../create-group-2";
import CreateGroup4 from "../create-group-4";
/* eslint-enable */

class CreateGroup3 extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton
    } = this.props;

    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.goToNext = this.goToNext.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ headerCurrentStep: 3, headerSteps: 4 });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: CreateGroup2, sceneDirection: -1 })
    });
    setAppModalFooterButton({
      footerText: t("common:next"),
      footerOnClick: this.goToNext
    });
  }

  goToNext() {
    const { setAppModalScene } = this.props;
    if (this.checkForm())
      setAppModalScene({ scene: CreateGroup4, sceneDirection: 1 });
  }

  checkForm() {
    const {
      modules: { value }
    } = this.props;
    return this.checkInput("modules", value);
  }

  checkInput(id, value) {
    const error = value.length === 0 ? "missing" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ [id]: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(clickValue) {
    const {
      modules: { value }
    } = this.props;
    const newValue = value;
    if (_.includes(newValue, clickValue)) _.pull(newValue, clickValue);
    else newValue.push(clickValue);
    this.checkInput("modules", newValue);
  }

  render() {
    const {
      t,
      modules: { value, error }
    } = this.props;

    return (
      <ListFlat
        data={modulesData}
        extraData={{ value }}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <React.Fragment>
            <AppModalTitle style={{ marginBottom: 0 }}>
              {t("modules")}
            </AppModalTitle>
            <CreateGroupError>
              {error && t(`validation:modules.${error}`)}
            </CreateGroupError>
          </React.Fragment>
        )}
        renderItem={({ item }) => (
          <ModalListItem
            icon={item.icon}
            title={t(`modules:${item.id}.title`)}
            description={t(`modules:${item.id}.description`)}
            selected={_.includes(value, item.id)}
            selectionType={false}
            onClick={() => this.handleChange(item.id)}
          />
        )}
      />
    );
  }
}

CreateGroup3.defaultProps = {
  modules: { value: [], error: undefined }
};

CreateGroup3.propTypes = {
  setAppModalHeaderSteps: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  modules: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string),
    error: PropTypes.string
  }),
  t: PropTypes.func.isRequired
};

export default withTranslation("createGroup")(CreateGroup3);
