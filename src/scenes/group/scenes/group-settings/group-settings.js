import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import withAppModal from "../../../../hocs/with-app-modal";
import ListFlat from "../../../../components/list-flat";
import AppModalSceneTitle from "../../../../components/app-modal-scene-title";
import AppModalSceneListItem from "../../../../components/app-modal-scene-list-item";
/* eslint-disable-next-line */
import groupSettingsData from "./group-settings-data";

class GroupSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderListHeader = this.renderListHeader.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  renderListHeader() {
    const { t } = this.props;
    return <AppModalSceneTitle>{t("groupSettings")}</AppModalSceneTitle>;
  }

  renderItem({ item }) {
    const { t, setAppModalScene } = this.props;
    return (
      <AppModalSceneListItem
        title={t(`${item.id}.title`)}
        description={t(`${item.id}.description`)}
        onClick={() => setAppModalScene({ scene: item.scene, direction: 1 })}
      />
    );
  }

  render() {
    return (
      <ListFlat
        ref={this.listFlat}
        contentContainerStyle={{ position: "relative" }}
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

export default _.flow([withAppModal, withTranslation("groupSettings")])(GroupSettings);
