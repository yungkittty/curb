import React from "react";
import PropTypes from "prop-types";
import Link from "../link";

const ModalLink = ({ to, ...others }) => <Link {...others} to={to} />;

ModalLink.propTypes = {
  to: PropTypes.shape({
    state: PropTypes.shape({
      isModal: ({ isModal }) =>
        !isModal && new Error("Invalid prop `state` supplied to `ModalLink`.")
    }).isRequired
  }).isRequired
};

export default ModalLink;
