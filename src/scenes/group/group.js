import React from "react";
import PropTypes from "prop-types";
import ButtonIconFloat from "../../components/button-icon-float";
import CreateMedia from "../create-media";

const Group = ({ showAppModal }) => (
  <ButtonIconFloat icon="plus" onClick={() => showAppModal({ scene: CreateMedia })} />
);

Group.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  groupMediaTypes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Group;
