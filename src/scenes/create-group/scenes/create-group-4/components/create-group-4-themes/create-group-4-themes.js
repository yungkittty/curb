import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ThemesContainer from "./components/themes-container";
import ListFlat from "../../../../../../components/list-flat";
import ModalListItem from "../../../../../../components/modal-list-item";
import themesData from "./create-group-4-themes-data";

const CreateGroup4Themes = ({ t, onClick, value }) => (
  <ThemesContainer>
    <ListFlat
      data={themesData}
      extraData={{ value }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ModalListItem
          title={t(`themeList.${item.id}`)}
          titleColor="#ffffff"
          backgroundColor={item.backgroundColor}
          selected={item.id === value}
          selectionType
          selectedColorAlternate
          onClick={() => onClick(item.id)}
        />
      )}
    />
  </ThemesContainer>
);

CreateGroup4Themes.defaultProps = {
  onClick: undefined,
  value: undefined
};

CreateGroup4Themes.propTypes = {
  t: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default withTranslation("createGroup")(CreateGroup4Themes);
