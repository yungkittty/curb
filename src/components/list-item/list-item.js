import React from "react";
import PropTypes from "prop-types";
import ItemContainer from "./components/item-container";
import ItemIcon from "./components/item-icon";
import ItemPreview from "./components/item-preview";
import ItemSelection from "./components/item-selection";

const ListItem = ({ icon, title, description, selected, onClick }) => (
  <ItemContainer selected={selected} onClick={onClick}>
    <React.Fragment>
      <ItemIcon icon={icon} />
      <ItemPreview title={title} description={description} />
      <ItemSelection selected={selected} />
    </React.Fragment>
  </ItemContainer>
);

ListItem.defaultProps = {
  icon: undefined,
  title: undefined,
  description: undefined,
  selected: undefined,
  onClick: undefined
};

ListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

export default ListItem;
