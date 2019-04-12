import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import ItemContainer from "./components/item-container";
import ItemIcon from "./components/item-icon";
import ItemPreview from "./components/item-preview";
import ItemSelection from "./components/item-selection";

const AppModalListItem = ({
  theme,
  icon,
  title,
  titleColor,
  backgroundColor,
  normalHoverColor,
  description,
  selected,
  selectedColorAlternate,
  selectionType,
  disabled,
  onClick
}) => (
  <ItemContainer
    backgroundcolor={backgroundColor}
    hoverColor={!normalHoverColor ? theme.primaryVariantColor : undefined}
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

AppModalListItem.defaultProps = {
  icon: undefined,
  titleColor: undefined,
  backgroundColor: undefined,
  normalHoverColor: false,
  description: undefined,
  selected: undefined,
  selectedColorAlternate: undefined,
  selectionType: undefined,
  disabled: undefined,
  onClick: () => undefined
};

AppModalListItem.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  normalHoverColor: PropTypes.bool,
  description: PropTypes.string,
  selected: PropTypes.bool,
  selectedColorAlternate: PropTypes.bool,
  selectionType: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default withTheme(AppModalListItem);
