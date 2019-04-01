import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ModulesContainer from "./components/modules-container";
import ListFlat from "../../../../../../components/list-flat";
import ModalListItem from "../../../../../../components/modal-list-item";
import modulesData from "./create-group-3-modules-data";

const CreateGroup3Modules = ({ t, onClick, modules }) => (
  <ModulesContainer>
    <ListFlat
      data={modulesData}
      extraData={{ modules }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ModalListItem
          icon={item.icon}
          title={t(`${item.id}.title`)}
          description={t(`${item.id}.description`)}
          selected={_.includes(modules, item.id)}
          selectionType={false}
          onClick={() => onClick(item.id)}
        />
      )}
    />
  </ModulesContainer>
);

CreateGroup3Modules.defaultProps = {
  onClick: undefined,
  modules: undefined
};

CreateGroup3Modules.propTypes = {
  t: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  /* eslint-disable-next-line */
  modules: PropTypes.array
};

export default withTranslation("modules")(CreateGroup3Modules);
