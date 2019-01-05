import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ModulesContainer from "./components/modules-container";
import ListFlat from "../../../../../../components/list-flat";
import ListItem from "../../../../../../components/list-item";

const modulesData = [
  {
    id: "text",
    icon: "align-left",
    title: "Post",
    description: "Allows users to post textual content"
  },
  {
    id: "image",
    icon: "image",
    title: "Image",
    description: "Allows users to post images"
  },
  {
    id: "video",
    icon: "video",
    title: "Video",
    description: "Allows users to post videos"
  },
  {
    id: "localisation",
    icon: "map-marker-alt",
    title: "Localisation",
    description: "Allows users to post localisation points"
  }
];

const ContentModules = ({ onClick, modules }) => (
  <ModulesContainer>
    <ListFlat
      showsVerticalScrollIndicator={false}
      data={modulesData}
      extraData={{ modules }}
      keyExtractor={module => module.id}
      renderItem={({ item: module }) => (
        <ListItem
          icon={module.icon}
          title={module.title}
          description={module.description}
          selected={_.includes(modules, module.id)}
          selectionType={false}
          onClick={() => onClick(module.id)}
        />
      )}
    />
  </ModulesContainer>
);

ContentModules.defaultProps = {
  onClick: undefined,
  modules: undefined
};

ContentModules.propTypes = {
  onClick: PropTypes.func,
  /* eslint-disable-next-line */
  modules: PropTypes.array
};

export default ContentModules;
