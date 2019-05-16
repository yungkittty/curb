import React from "react";
import PropTypes from "prop-types";
import withGroup from "../../hocs/with-group";
import ButtonIconFloat from "../../components/button-icon-float";
import GroupSettings from "./scenes/group-settings";

const Group = ({ showAppModal, setAppModalSceneData, ...others }) => (
  <ButtonIconFloat
    icon="plus"
    onClick={() => {
      showAppModal({ scene: GroupSettings });
      setAppModalSceneData(others);
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
