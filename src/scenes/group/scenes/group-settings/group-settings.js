import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import withAppModal from "../../../../hocs/with-app-modal";
import AppModalSceneTitle from "../../../../components/app-modal-scene-title";
import AppModalSceneList from "../../../../components/app-modal-scene-list";
import AppModalSceneListItem from "../../../../components/app-modal-scene-list-item";
/* eslint-disable-next-line */
import groupSettingsData from "./group-settings-data";

class GroupSettings extends Component {
  constructor(props) {
    super(props);
    this.renderListHeader = this.renderListHeader.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  renderListHeader() {
    const { t } = this.props;
    return (
      <AppModalSceneTitle>
        {/* eslint-disable-line */}
        {t("groupSettings")}
      </AppModalSceneTitle>
    );
  }

  renderItem({ item }) {
    const { t, setAppModalScene } = this.props;
    return (
      <AppModalSceneListItem
        title={t(`${item.id}.title`)}
        description={t(`${item.id}.description`)}
        onClick={() =>
          setAppModalScene({
            scene: item.scene,
            direction: 1
          })
        }
      />
    );
  }

  render() {
    return (
      <AppModalSceneList
        ref={this.listFlat}
        data={groupSettingsData}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderListHeader}
        renderItem={this.renderItem}
      />
    );
  }
}

GroupSettings.propTypes = {
  t: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTranslation("groupSettings")
])(GroupSettings);
