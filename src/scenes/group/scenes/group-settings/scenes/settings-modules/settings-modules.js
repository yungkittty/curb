import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import withAppModal from "../../../../../../hocs/with-app-modal";
import Loader from "../../../../../../components/loader";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import AppModalSceneError from "../../../../../../components/app-modal-scene-error";
import ListFlat from "../../../../../../components/list-flat";
import AppModalSceneListItem from "../../../../../../components/app-modal-scene-list-item";
import modulesList from "../../../../../../utils/modules-list/modules-list";
/* eslint-disable-next-line */
import GroupSettings from "../../group-settings";

class SettingsModules extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton,
      setAppModalSceneData,
      groupMediaTypes
    } = this.props;

    this.listFlat = React.createRef();

    this.submit = this.submit.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);

    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: GroupSettings, direction: -1 })
    });
    setAppModalFooterButton({ text: t("common:edit"), onClick: this.submit });

    setAppModalSceneData({ newGroupMediaTypes: { value: [...groupMediaTypes], error: undefined } });
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
      newGroupMediaTypes: { value },
      groupMediaTypes
    } = this.props;
    if (this.checkForm() && !_.isEqual(_.sortBy(value), _.sortBy(groupMediaTypes)))
      patchGroup({ id: groupId, mediaTypes: value });
    else {
      const { current: listFlat } = this.listFlat;
      listFlat.scrollToOffset({ offset: 0 });
    }
  }

  checkForm() {
    const {
      newGroupMediaTypes: { value }
    } = this.props;
    return this.checkInput("newGroupMediaTypes", value);
  }

  checkInput(id, value) {
    const error = value.length === 0 ? "missing" : undefined;
    const { setAppModalSceneData, [id]: Y } = this.props;
    setAppModalSceneData({ newGroupMediaTypes: { ...Y, value, error } });
    return error === undefined;
  }

  handleChange(clickValue) {
    const {
      newGroupMediaTypes: { value }
    } = this.props;
    if (_.includes(value, clickValue)) _.pull(value, clickValue);
    else value.push(clickValue);
    this.checkInput("newGroupMediaTypes", value);
  }

  render() {
    const {
      t,
      isPatchGroupFetching,
      newGroupMediaTypes: { value, error }
    } = this.props;
    return isPatchGroupFetching ? (
      <Loader />
    ) : (
      <ListFlat
        ref={this.listFlat}
        contentContainerStyle={{ position: "relative" }}
        data={modulesList}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <React.Fragment>
            <AppModalSceneTitle>{t("modules.title")}</AppModalSceneTitle>
            <AppModalSceneError>{error && t(`validation:modules.${error}`)}</AppModalSceneError>
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

SettingsModules.defaultProps = {
  newGroupMediaTypes: { value: [], error: undefined }
};

SettingsModules.propTypes = {
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  isPatchGroupFetching: PropTypes.bool.isRequired,
  patchGroup: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  newGroupMediaTypes: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string),
    error: PropTypes.string
  }),
  groupMediaTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  t: PropTypes.func.isRequired
};

export default _.flow([withAppModal, withTranslation("groupSettings")])(SettingsModules);
