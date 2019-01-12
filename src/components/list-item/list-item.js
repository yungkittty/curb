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
  disabled,
  onClick
}) => (
  <ItemContainer
    backgroundColor={backgroundColor}
    selected={selected}
    disabled={disabled}
    onClick={onClick}
  >
    <React.Fragment>
      <ItemIcon icon={icon} disabled={disabled} />
      <ItemPreview
        title={title}
        titleColor={titleColor}
        titleCentered={!icon && !description}
        icon={icon}
        description={description}
        disabled={disabled}
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
  disabled: undefined,
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
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default ListItem;
