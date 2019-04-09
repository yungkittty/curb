import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AppModalTitle from "../../../../components/app-modal-title";
import CreateGroupError from "../../components/create-group-error";
import ListFlat from "../../../../components/list-flat";
import ModalListItem from "../../../../components/modal-list-item";
/* eslint-disable */
import CreateGroup2 from "../create-group-2";
import CreateGroup4 from "../create-group-4";
import modulesList from "../../../../utils/modules-list/modules-list";
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
        data={modulesList}
        extraData={{ value }}
        keyExtractor={item => Object.keys(item)[0]}
        ListHeaderComponent={() => (
          <React.Fragment>
            <AppModalTitle>{t("modules")}</AppModalTitle>
            <CreateGroupError>
              {error && t(`validation:modules.${error}`)}
            </CreateGroupError>
          </React.Fragment>
        )}
        renderItem={({ item }) => {
          const index = Object.keys(item)[0];
          return (
            <ModalListItem
              icon={item[index].icon}
              title={t(`modules:${index}.title`)}
              description={t(`modules:${index}.description`)}
              selected={_.includes(value, index)}
              selectionType={false}
              onClick={() => this.handleChange(index)}
            />
          );
        }}
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
