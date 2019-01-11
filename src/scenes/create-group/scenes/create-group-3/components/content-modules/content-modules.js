import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import ModulesContainer from "./components/modules-container";
import ListFlat from "../../../../../../components/list-flat";
import ListItem from "../../../../../../components/list-item";
import modulesData from "./content-modules-data";

const ContentModules = ({ t, onClick, modules }) => (
  <ModulesContainer>
    <ListFlat
      showsVerticalScrollIndicator={false}
      data={modulesData}
      extraData={{ modules }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ListItem
          icon={item.icon}
          title={t(`modules:${item.id}.title`)}
          description={t(`modules:${item.id}.description`)}
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
  t: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  /* eslint-disable-next-line */
  modules: PropTypes.array
};

export default withNamespaces()(ContentModules);
