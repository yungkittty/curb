import React from "react";
import PropTypes from "prop-types";
import ItemContainer from "./components/item-container";
import ItemIcon from "./components/item-icon";
import ItemPreview from "./components/item-preview";
import ItemSelection from "./components/item-selection";

const AppModalSceneListItem = ({
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
    // eslint-disable-line
    backgroundColor={backgroundColor}
    selected={selected}
    disabled={disabled}
    onClick={onClick}
  >
    <React.Fragment>
      {icon && <ItemIcon icon={icon} disabled={disabled} />}
      <ItemPreview
        title={title}
        titleColor={titleColor}
        titleCentered={!icon && !description}
        description={description}
        disabled={disabled}
        noIcon={icon === undefined}
      />
      {selectionType !== undefined && (
        <ItemSelection
          selected={selected}
          selectionType={selectionType}
          selectedColorAlternate={selectedColorAlternate}
          titleCentered={!icon && !description}
        />
      )}
    </React.Fragment>
  </ItemContainer>
);

AppModalSceneListItem.defaultProps = {
  icon: undefined,
  titleColor: undefined,
  backgroundColor: undefined,
  description: undefined,
  selected: undefined,
  selectedColorAlternate: undefined,
  selectionType: undefined,
  disabled: undefined,
  onClick: () => undefined
};

AppModalSceneListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  description: PropTypes.string,
  selected: PropTypes.bool,
  selectedColorAlternate: PropTypes.bool,
  selectionType: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default AppModalSceneListItem;
