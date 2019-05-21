import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ListFlat from "../../components/list-flat";
import AppModalSceneListItem from "../../components/app-modal-scene-list-item";
import modulesList from "../../utils/modules-list";
import withGroup from "../../hocs/with-group";
/* eslint-disable */
import CreateMediaImage from "./scenes/create-media-image";
import CreateMediaLocation from "./scenes/create-media-location";
import CreateMediaText from "./scenes/create-media-text";
import CreateMediaVideo from "./scenes/create-media-video";
/* eslint-enable */

class CreateMedia extends Component {
  constructor(props) {
    super(props);
    const { t, setAppModalHeaderText } = this.props;

    setAppModalHeaderText({ text: t("common:post") });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(moduleId) {
    const { setAppModalScene } = this.props;
    const scene = (() => {
      switch (moduleId) {
        case "image":
          return CreateMediaImage;
        case "location":
          return CreateMediaLocation;
        case "text":
          return CreateMediaText;
        case "video":
          return CreateMediaVideo;
        default:
          return undefined;
      }
    })();
    setAppModalScene({ scene, direction: 1 });
  }

  render() {
    const { t, groupMediaTypes } = this.props;

    return (
      <ListFlat
        data={modulesList}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          _.includes(groupMediaTypes, item.id) ? (
            <AppModalSceneListItem
              icon={item.icon}
              title={t(`modules:${item.id}.title`)}
              onClick={() => this.handleChange(item.id)}
            />
          ) : (
            <React.Fragment />
          )
        }
      />
    );
  }
}

CreateMedia.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  groupMediaTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withGroup,
  withTranslation()
])(CreateMedia);
