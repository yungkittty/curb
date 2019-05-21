import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import GroupCreateError from "../../components/group-create-error";
import ListFlat from "../../../../../../components/list-flat";
import AppModalSceneListItem from "../../../../../../components/app-modal-scene-list-item";
import GroupCreate2 from "../group-create-2"; // eslint-disable-line
import GroupCreate4 from "../group-create-4"; // eslint-disable-line
import modulesList from "../../../../../../utils/modules-list/modules-list";
import withAppModal from "../../../../../../hocs/with-app-modal";

class GroupCreate3 extends Component {
  constructor(props) {
    super(props);
    const {
      // eslint-disable-line
      setAppModalHeaderSteps,
      setAppModalHeaderLeftButton,
      setAppModalFooterButton,
      t
    } = this.props;

    this.listFlat = React.createRef();

    this.goToPrev = this.goToPrev.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderSteps({ currentStep: 3, steps: 4 });
    setAppModalHeaderLeftButton({ icon: "arrow-left", onClick: this.goToPrev });
    setAppModalFooterButton({ text: t("common:next"), onClick: this.goToNext });
  }

  goToPrev() {
    const { setAppModalScene } = this.props;
    setAppModalScene({ scene: GroupCreate2, direction: -1 });
  }

  goToNext() {
    const { setAppModalScene } = this.props;
    if (!this.checkForm()) {
      const { current: listFlat } = this.listFlat;
      listFlat.scrollToOffset({ offset: 0 });
    } else setAppModalScene({ scene: GroupCreate4, direction: 1 });
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
        ref={this.listFlat}
        contentContainerStyle={{ position: "relative" }}
        data={modulesList}
        extraData={{ value }}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <React.Fragment>
            <AppModalSceneTitle>
              {/* eslint-disable-line */}
              {t("modules")}
            </AppModalSceneTitle>
            <GroupCreateError>
              {/* eslint-disable-line */}
              {error && t(`validation:modules.${error}`)}
            </GroupCreateError>
          </React.Fragment>
        )}
        renderItem={({ item }) => (
          <AppModalSceneListItem
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

GroupCreate3.defaultProps = {
  modules: { value: [], error: undefined }
};

GroupCreate3.propTypes = {
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

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTranslation("groupCreate")
])(GroupCreate3);
