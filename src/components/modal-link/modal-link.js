import React from "react";
import PropTypes from "prop-types";
import Link from "../link";

const ModalLink = ({ to, ...others }) => <Link {...others} to={to} />;

ModalLink.propTypes = {
  to: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.shape({
      isModal: ({ isModal }) => !isModal && new Error("") // <=
    }).isRequired
  }).isRequired
};

export default ModalLink;
