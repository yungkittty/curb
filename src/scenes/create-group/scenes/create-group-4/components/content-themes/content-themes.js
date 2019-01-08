import React from "react";
import PropTypes from "prop-types";
import ThemesContainer from "./components/themes-container";
import ListFlat from "../../../../../../components/list-flat";
import ListItem from "../../../../../../components/list-item";
import themesData from "./content-themes-data";

const ContentThemes = ({ onClick, value }) => (
  <ThemesContainer>
    <ListFlat
      data={themesData}
      extraData={{ value }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ListItem
          icon={item.icon}
          title={item.title}
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
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default ContentThemes;
