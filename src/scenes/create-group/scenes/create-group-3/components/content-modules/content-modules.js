import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ModulesContainer from "./components/modules-container";
import ListFlat from "../../../../../../components/list-flat";
import ListItem from "../../../../../../components/list-item";
import modulesData from "./content-modules-data";

const ContentModules = ({ onClick, modules }) => (
  <ModulesContainer>
    <ListFlat
      showsVerticalScrollIndicator={false}
      data={modulesData}
      extraData={{ modules }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ListItem
          icon={item.icon}
          title={item.title}
          description={item.description}
          selected={_.includes(modules, item.id)}
          selectionType={false}
          onClick={() => onClick(item.id)}
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
