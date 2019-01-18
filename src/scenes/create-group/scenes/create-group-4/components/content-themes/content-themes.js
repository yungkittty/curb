import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import ThemesContainer from "./components/themes-container";
import ListFlat from "../../../../../../components/list-flat";
import ListItem from "../../../../../../components/list-item";
import themesData from "./content-themes-data";

const ContentThemes = ({ t, onClick, value }) => (
  <ThemesContainer>
    <ListFlat
      data={themesData}
      extraData={{ value }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ListItem
          title={t(`themeList.${item.id}`)}
          titleColor="#ffffff"
          backgroundColor={item.backgroundColor}
          selected={item.id === value}
          selectionType={true}
          selectedColorAlternate
          onClick={() => onClick(item.id)}
        />
      )}
    />
  </ThemesContainer>
);

ContentThemes.defaultProps = {
  onClick: undefined,
  value: undefined
};

ContentThemes.propTypes = {
  t: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default withNamespaces("createGroup")(ContentThemes);
