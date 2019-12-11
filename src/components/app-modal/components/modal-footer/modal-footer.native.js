import React from "react";
import PropTypes from "prop-types";
import FooterButtonText from "./components/footer-button-text";

const ModalFooter = ({
  // eslint-disable-line
  areAppModalButtonsDisabled,
  appModalFooterText,
  appModalFooterOnClick
}) =>
  appModalFooterText ? (
    <FooterButtonText
      type="h3"
      weight={500}
      // eslint-disable-next-line
      children={appModalFooterText}
      onClick={appModalFooterOnClick}
      disabled={areAppModalButtonsDisabled}
    />
  ) : null;

ModalFooter.propTypes = {
  areAppModalButtonsDisabled: PropTypes.bool.isRequired,
  appModalFooterText: PropTypes.string.isRequired,
  appModalFooterOnClick: PropTypes.func.isRequired
};

export default ModalFooter;
