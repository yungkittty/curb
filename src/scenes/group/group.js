import React from "react";
import PropTypes from "prop-types";
import withGroup from "../../hocs/with-group";
import ButtonIconFloat from "../../components/button-icon-float";
import CreateMedia from "../create-media";

const Group = ({ showAppModal, setAppModalSceneData, groupId, groupMediaTypes }) => (
  <ButtonIconFloat
    icon="plus"
    onClick={() => {
      showAppModal({ scene: CreateMedia });
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

export default withGroup(Group);
