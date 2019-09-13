import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import withAppModal from "../../../../hocs/with-app-modal";
import ListFlat from "../../../../components/list-flat";
import AppModalSceneListItem from "../../../../components/app-modal-scene-list-item";
/* eslint-disable-next-line */
import groupSettingsData from "./group-settings-data";

class GroupSettings extends Component {
  constructor(props) {
    super(props);

    const { t, setAppModalHeaderText } = this.props;

    this.renderItem = this.renderItem.bind(this);

    setAppModalHeaderText({ text: t("groupSettings") });
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
      <ListFlat
        ref={this.listFlat}
        contentContainerStyle={{ position: "relative" }}
        data={groupSettingsData}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
      />
    );
  }
}

GroupSettings.propTypes = {
  t: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withTranslation("groupSettings")
])(GroupSettings);
