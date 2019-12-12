import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import OverlayContainer from "./components/overlay-container";
import OverlayItem from "./components/overlay-item";
import OverlayClose from "./components/overlay-close";

const CardOverlay = ({ OverlayComponent, optionsList, onClose }) => {
  const isMenu = !OverlayComponent;
  return (
    <React.Fragment>
      <OverlayContainer isMenu={isMenu}>
        {OverlayComponent
          ? React.cloneElement(OverlayComponent)
          : _.map(optionsList, ({ onClick, ...others }, index) => (
              <OverlayItem
                key={index}
                onClick={() => {
                  onClick();
                  onClose();
                }}
                {...others}
              />
            ))}
      </OverlayContainer>
      {isMenu && <OverlayClose onClose={onClose} />}
    </React.Fragment>
  );
};

CardOverlay.defaultProps = {
  OverlayComponent: undefined,
  optionsList: undefined
};

CardOverlay.propTypes = {
  OverlayComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  optionsList: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, icon: PropTypes.string, onClick: PropTypes.func })
  ),
  onClose: PropTypes.func.isRequired
};

export default CardOverlay;
