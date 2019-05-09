import React from "react";
import TestFairy from "react-native-testfairy";
import PropTypes from "prop-types";
import withGroup from "../../hocs/with-group";
import ButtonIconFloat from "../../components/button-icon-float";
import CreateMedia from "../create-media";

const Group = ({ showAppModal, setAppModalSceneData, ...others }) => (
  <ButtonIconFloat
    icon="plus"
    onClick={() => {
      TestFairy.log(others);
      showAppModal({ scene: CreateMedia });
      setAppModalSceneData({ groupsId: others.groupId, groupMediaTypes: others.groupMediaTypes });
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
