import React from "react";
import PropTypes from "prop-types";
import ButtonIconFloat from "../../components/button-icon-float";
import Post from "../post";

const Group = ({ showAppModal, setAppModalSceneData, groupId, groupMediaTypes }) => (
  <ButtonIconFloat
    icon="plus"
    onClick={() => {
      showAppModal({ scene: Post });
      setAppModalSceneData({ groupId, groupMediaTypes });
    }}
  />
);

Group.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  setAppModalSceneData: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  groupMediaTypes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Group;
