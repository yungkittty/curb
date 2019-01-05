import React from "react";
import PropTypes from "prop-types";
import ItemContainer from "./components/item-container";
import ItemIcon from "./components/item-icon";
import ItemPreview from "./components/item-preview";
import ItemSelection from "./components/item-selection";

const ListItem = ({
  icon,
  title,
  titleColor,
  backgroundColor,
  description,
  selected,
  selectedColorAlternate,
  selectionType,
  onClick
}) => (
  <ItemContainer
    backgroundColor={backgroundColor}
    selected={selected}
    onClick={onClick}
  >
    <React.Fragment>
      <ItemIcon icon={icon} />
      <ItemPreview
        title={title}
        titleColor={titleColor}
        titleCentered={!icon && !description}
        icon={icon}
        description={description}
      />
      {selectionType !== undefined && (
        <ItemSelection
          selected={selected}
          selectionType={selectionType}
          selectedColorAlternate={selectedColorAlternate}
        />
      )}
    </React.Fragment>
  </ItemContainer>
);

ListItem.defaultProps = {
  icon: undefined,
  title: undefined,
  titleColor: undefined,
  backgroundColor: undefined,
  description: undefined,
  selected: undefined,
  selectedColorAlternate: undefined,
  selectionType: undefined,
  onClick: undefined
};

ListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  description: PropTypes.string,
  selected: PropTypes.bool,
  selectedColorAlternate: PropTypes.bool,
  selectionType: PropTypes.bool,
  onClick: PropTypes.func
};

export default ListItem;
