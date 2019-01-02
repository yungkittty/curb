import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ThemesContainer from "./components/themes-container";
import ListFlat from "../../../../../../components/list-flat";
import ListItem from "../../../../../../components/list-item";

const themesData = [
  {
    id: "blue",
    title: "Blue",
    backgroundColor: "#56CCF2"
  },
  {
    id: "red",
    title: "Red",
    backgroundColor: "#EB5757"
  },
  {
    id: "green",
    title: "Green",
    backgroundColor: "#6FCF97"
  },
  {
    id: "yellow",
    title: "Yellow",
    backgroundColor: "#F2C94C"
  },
  {
    id: "magenta",
    title: "Magenta",
    backgroundColor: "#BB6BD9"
  }
];

const ContentThemes = ({ onClick, value }) => (
  <ThemesContainer>
    <ListFlat
      showsVerticalScrollIndicator={false}
      data={themesData}
      extraData={{ value }}
      keyExtractor={theme => theme.id}
      renderItem={({ item: theme }) => (
        <ListItem
          icon={theme.icon}
          title={theme.title}
          titleColor="#ffffff"
          backgroundColor={theme.backgroundColor}
          selected={theme.id === value}
          selectedColor={theme.selectedColor}
          onClick={() => onClick(theme.id)}
          uniqueSelection
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
